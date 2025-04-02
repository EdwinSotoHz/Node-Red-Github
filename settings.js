module.exports = {
    uiPort: process.env.PORT || 1880,  // Usa el puerto dinámico de Render
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "tu-clave-secreta",
    adminAuth: null,  // Configura autenticación si es necesario
    httpStatic: "./public",  // Carpeta para archivos estáticos (opcional)
    flowFile: "flows.json",  // Guarda los flujos en este archivo
    editorTheme: {
    projects: {
        enabled: false  // Desactiva proyectos si no los usas
    }
    }
};