Feature: Ejemplo prueba

  @login
  Scenario: Login exitoso
    Given Ingreso a la app interbanking
    When Avanzo onboarding
    When Ingreso "xxx" para la vinculacion del dispositivo
    When Visualizo formulario de login
    When Ingreso "xxx" y "xxx"
    When Acepto licencia
    When Visualizo listado de empresas y selecciono una
    Then Estoy en pantalla principal
