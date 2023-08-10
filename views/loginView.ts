import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginView extends Page {
    /**
     * define selectors using getter methods
     */

    public get btnAllow () {
        const selectorAndroid = '//*[@text="Allow"]'
        const selectorIOS = '//*[@name="Allow"]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS

        return $(`${selector}`)
    }

    public get btnOKAccederCamara () {
        const selectorAndroid = '//*[contains(@resource-id, "com.android.permissioncontroller:id/permission_allow_foreground_only_button")]'
        const selectorIOS = '//*[@name="OK"]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)

    }

    public get labelTituloLogin () {
        return $('//*[@name="Iniciá sesión para finalizar la vinculación"]');
    }
    
    public get inputQR () {
        const selectorAndroid = '//*[contains(@resource-id,"codigo")]'
        const selectorIOS = '//XCUIElementTypeTextField[@name="codigo"]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnEnviar () {
        const selectorAndroid = '//*[contains(@resource-id,"btnEnviarCodigo")]'
        const selectorIOS = '//XCUIElementTypeOther[@name="btnEnviarCodigo"]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnIniciarSesionFront (){
        const selectorAndroid = '//*[contains(@resource-id,"btnSUCCESS")]'
        const selectorIOS = ''
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get inputUsuario (){
        const selectorAndroid = '//*[@resource-id="username"]'
        const selectorIOS = 'id:username'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get inputClave (){
        const selectorAndroid = '//*[@resource-id="pw"]'
        const selectorIOS = 'id:pw'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnIniciarSesion (){
        const selectorAndroid = '//*[@text="Iniciar sesión"]'
        const selectorIOS = 'id:btnIniciarSesion'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelHolaNombreOperador (){
        const selectorAndroid = '//*[contains(@text,"Hola")]'
        const selectorIOS = '//XCUIElementTypeStaticText[contains(@name,"Hola")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelCuilOperador (){
        const selectorAndroid = '//*[contains(@text,"CUIL")]'
        const selectorIOS = '//XCUIElementTypeStaticText[contains(@name,"CUIL")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }
    
    public get elementPantallaPrincipal (){
        const selectorAndroid = '//*[contains(@resource-id,"labelTituloDashboard")]'
        const selectorIOS = '//*[contains(@name,"labelTituloDashboard")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelCUIL(){
        const selectorIOS = '//XCUIElementTypeStaticText[contains(@name,"CUIL")]'
        const selectorAndroid = '//*[contains(@text,"CUIL")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelTituloOnboarding1(){
        const selectorIOS = '//XCUIElementTypeStaticText[@name="labelTituloOnBoarding1"]'
        const selectorAndroid = '//*[contains(@resource-id, "labelTituloOnBoarding1")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnSiguienteOnboarding(){
        const selectorIOS = '//XCUIElementTypeOther[@name="btnOnBoardingSiguiente"]'
        const selectorAndroid = '//*[contains(@resource-id, "btnOnBoardingSiguiente")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelTituloOnboarding2(){
        const selectorIOS = '//XCUIElementTypeStaticText[@name="labelTituloOnBoarding2"]'
        const selectorAndroid = '//*[contains(@resource-id, "labelTituloOnBoarding2")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelTituloOnboarding3(){
        const selectorIOS = '//XCUIElementTypeStaticText[@name="labelTituloOnBoarding3"]'
        const selectorAndroid = '//*[contains(@resource-id, "labelTituloOnBoarding3")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnComenzarOnboarding(){
        const selectorIOS = '//XCUIElementTypeOther[@name="btnOnBoardingComenzar"]'
        const selectorAndroid = '//*[contains(@resource-id, "btnOnBoardingComenzar")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }
    
    public get labelTituloSlideCodigoQREscaneado(){
        const selectorIOS = '//XCUIElementTypeStaticText[@name="labelTituloInfoExito"]'
        const selectorAndroid = '//*[contains(@resource-id,"labelTituloInfoExito")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelCueropoSlideCodigoQREscaneado(){
        const selectorIOS = '//XCUIElementTypeStaticText[@name="labelDescInfoExito"]'
        const selectorAndroid = '//*[contains(@resource-id,"labelDescInfoExito")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnContinuarSlideCodigoQREscaneado(){
        const selectorIOS = '//XCUIElementTypeOther[@name="bntInfoExito"]'
        const selectorAndroid = '//*[contains(@resource-id,"bntInfoExito")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelSincronizacionExitosa(){
        const selectorIOS = '//XCUIElementTypeStaticText[@name="labelTituloModalEnrolamientoSUCCESS"]'
        const selectorAndroid = '//*[contains(@resource-id,"labelTituloModalEnrolamientoSUCCESS")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnIniciaSesionSincronizacionExitosa(){
        const selectorIOS = '//XCUIElementTypeOther[@name="btnEnrolamientoSUCCESS"]'
        const selectorAndroid = '//*[contains(@resource-id,"btnEnrolamientoSUCCESS")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelTituloMisEmpresas(){
        const selectorIOS = '//XCUIElementTypeStaticText[@name="Mis empresas"]'
        const selectorAndroid = '//*[contains(@text,"Mis empresas")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get labelVersionLogin(){
        const selectorIOS = '//XCUIElementTypeStaticText[contains(@name,"Versión ")]'
        const selectorAndroid = '//*[contains(@text,"Versión ")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public get btnCerrarExplorador(){
        const selectorIOS = '//XCUIElementTypeOther[@name="btnCerrarExplorador"]'
        const selectorAndroid = '//*[contains(@resource-id,"btnCerrarExplorador")]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selector}`)
    }

    public async existeEmpresa(){
        this.sleep(15000);
        let isExisting = await this.labelTituloMisEmpresas.isExisting();
        console.log("VALIDACION :"+isExisting);
        return isExisting;
    }

    public async solicitaCamara(){
        this.sleep(3000);
        let isExisting = await this.btnOKAccederCamara.isExisting();
        console.log("VALIDACION :"+isExisting);
        return isExisting;
    }

    public async sincronizar (codigoqr: string){
        await this.inputQR.setValue(codigoqr);
        await this.btnEnviar.click();
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     public async obtenerDocumento (){
        var cuilLogin = await this.labelCUIL.getValue();
        cuilLogin = cuilLogin.substring(6, cuilLogin.length)
        return cuilLogin;
    }

    public async login (usuario: string, clave: string) {
        await this.inputUsuario.setValue(usuario);
        await this.inputClave.setValue(clave);
        await this.btnIniciarSesion.click();
    }

    public async requestDesvincularUsuario (documento: string) {
        var axios = require('axios');
        var data = JSON.stringify({
        "documento": documento,
        "pais": "CL"
        });

        var config = {
        method: 'put',
        url: 'https://qaalertas.interbanking.com.ar/hermes-server/api/v1/operator/device/unlink',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer f0c3176f-d1a4-42e0-bf06-44c94962f8d9'
        },
        data : data
        };

        axios(config)
        .then(function (response: { data: any; }) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
        console.log(error);
        });
    }

    public async sleep(milliseconds: number) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new loginView();
  
