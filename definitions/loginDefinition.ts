import { Given, When, Then } from "@wdio/cucumber-framework";
import { getDatabaseVersion } from "../database/update";

Given("Ejecutamos prueba", async function(){
    const result = await getDatabaseVersion();
    console.log("obtuve version: ",result)
})

When("",async function(){

})

Then("",async function(){

})
