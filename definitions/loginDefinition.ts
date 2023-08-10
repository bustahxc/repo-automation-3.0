import { Given, When, Then } from "@wdio/cucumber-framework";
import { getDatabaseVersion } from "../database/update";
import LoginPage from '../views/loginView.js';

Given(/^Ingreso a la app interbanking/, async () => {
    if(driver.isAndroid){
        await expect(LoginPage.labelTituloOnboarding1).toBeDisplayed();                             //es Android
        //await LoginPage.btnAllow.click();                                                         //ESTO SOLO EN LOCAL
    } else {                                                                                        //es iOS
        await expect(LoginPage.labelTituloOnboarding1).toBeDisplayed();
    }
});

When('Avanzo onboarding', async () => {
    await expect(LoginPage.labelTituloOnboarding1).toBeDisplayed();
    await LoginPage.btnSiguienteOnboarding.click();
    await expect(LoginPage.labelTituloOnboarding2).toBeDisplayed();
    await LoginPage.btnSiguienteOnboarding.click();
    await expect(LoginPage.labelTituloOnboarding3).toBeDisplayed();
    await LoginPage.btnComenzarOnboarding.click();
})

When('Ingreso {string} para la vinculacion del dispositivo', async (qr) => {
    if(await LoginPage.solicitaCamara() == true){
        await LoginPage.btnOKAccederCamara.click();
    }
    await expect(LoginPage.inputQR).toBeDisplayed({wait:10000});
    await LoginPage.sincronizar(qr);
    await expect(LoginPage.labelTituloSlideCodigoQREscaneado).toBeDisplayed();
    await expect(LoginPage.labelCueropoSlideCodigoQREscaneado).toBeDisplayed();
    await LoginPage.btnContinuarSlideCodigoQREscaneado.click();
    await expect(LoginPage.labelSincronizacionExitosa).toBeDisplayed();
    await LoginPage.btnIniciaSesionSincronizacionExitosa.click();
});

When('Visualizo formulario de login', async () => {
    await expect(LoginPage.labelHolaNombreOperador).toBeDisplayed();
    await expect(LoginPage.labelCuilOperador).toBeDisplayed();
    await expect(LoginPage.inputUsuario).toBeDisplayed();
    await expect(LoginPage.inputClave).toBeDisplayed();
    await expect(LoginPage.btnIniciarSesion).toBeDisplayed();
})

When('Ingreso {string} y {string}', async (usuario, clave) => {
    await expect(LoginPage.labelCUIL).toBeDisplayed();
    var cuil = await LoginPage.labelCUIL.getText();                     //Obtiene CUIL de vista login
    console.log("El CUIL obtenido es: "+cuil.substring(6,cuil.length)); //Muestra CUIL obtenido
    await LoginPage.requestDesvincularUsuario(cuil);                    //Ejecuta servicio de desvinculacion antes de primer login de vinculacion
    await expect(LoginPage.inputUsuario).toBeDisplayed();
    await LoginPage.login(usuario, clave)
});

When('Acepto licencia', async () => {
    await expect(notificacionesView.btnAceptarLicencia).toBeDisplayed({wait: 15000})
    await notificacionesView.btnAceptarLicencia.click();
})

When('Visualizo listado de empresas y selecciono una', async () => {
    if(await LoginPage.existeEmpresa() == true){
        await expect(notificacionesView.btnEmpresa).toBeDisplayed();
        await notificacionesView.btnEmpresa.click();
    }
})

When('Visualizo listado de empresas y selecciono empresa con bancos sin actualizar', async () => {
        if(await LoginPage.existeEmpresa() == true){
            await expect(dashboardView.btnEmpresaBancoSinActualizar).toBeDisplayed();
            await dashboardView.btnEmpresaBancoSinActualizar.click();
        }
})

When('Visualizo version de la app', async () => {
    await expect(LoginPage.labelVersionLogin).toBeDisplayed();
})

Then(/^Estoy en pantalla principal/, async () => {
    await expect(LoginPage.btnCerrarExplorador).toBeDisplayed();
    await LoginPage.btnCerrarExplorador.click();
    await expect(LoginPage.elementPantallaPrincipal).toBeDisplayed();
    await expect(notificacionesView.btnCampanaNotificaciones).toBeDisplayed();
    await expect(notificacionesView.btnMenuHamburguesa).toBeDisplayed();
});
