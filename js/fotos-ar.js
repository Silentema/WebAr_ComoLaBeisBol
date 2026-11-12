(() => {
  const databaseName = "pia-pi-fotos-ar";
  const storeName = "fotos";

  const openDatabase = () => new Promise((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);

    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(storeName)) {
        request.result.createObjectStore(storeName, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(
      request.error || new Error("No se pudo abrir la colección de fotos.")
    );
  });

  const runTransaction = async (mode, operation) => {
    const database = await openDatabase();

    return new Promise((resolve, reject) => {
      const transaction = database.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      let result;
      operation(store, (value) => {
        result = value;
      }, reject);

      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(
        transaction.error || new Error("No se pudo actualizar la colección de fotos.")
      );
      transaction.onabort = () => reject(
        transaction.error || new Error("Se canceló la actualización de la colección de fotos.")
      );
    });
  };

  window.coleccionFotosAR = {
    guardar: (imagen) => runTransaction("readwrite", (store, resolve, reject) => {
      const foto = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        fecha: new Date().toISOString(),
        imagen
      };
      const request = store.add(foto);
      request.onsuccess = () => resolve(foto.id);
      request.onerror = () => reject(
        request.error || new Error("No se pudo guardar la foto.")
      );
    }),

    listar: () => runTransaction("readonly", (store, resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        resolve(request.result.sort((a, b) => b.fecha.localeCompare(a.fecha)));
      };
      request.onerror = () => reject(
        request.error || new Error("No se pudieron leer las fotos.")
      );
    }),

    eliminar: (id) => runTransaction("readwrite", (store, resolve, reject) => {
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(
        request.error || new Error("No se pudo eliminar la foto.")
      );
    })
  };
})();
