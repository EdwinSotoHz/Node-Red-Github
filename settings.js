module.exports = {
    uiPort: process.env.PORT || 1880,
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "edpi",
    editorTheme: {
    projects: {
        enabled: false  // Desactiva proyectos si no los usas
    }
    },
    // ¡Añade los nodos que quieras cargar por defecto!
    functionGlobalContext: {
      // Ejemplo: módulos externos
    },
    runtimeState: {
        enabled: false
    }
};