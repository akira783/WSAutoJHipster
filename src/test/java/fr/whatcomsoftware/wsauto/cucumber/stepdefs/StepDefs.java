package fr.whatcomsoftware.wsauto.cucumber.stepdefs;

import fr.whatcomsoftware.wsauto.WsAutoJHipsterApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = WsAutoJHipsterApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
