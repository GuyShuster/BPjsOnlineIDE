package il.ac.bgu.cs.bp.samplebpjsproject;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.concurrent.ExecutorService;

import javax.websocket.Session;


import il.ac.bgu.cs.bp.bpjs.execution.BProgramRunner;
import il.ac.bgu.cs.bp.bpjs.model.BEvent;
import il.ac.bgu.cs.bp.bpjs.model.BProgram;
import il.ac.bgu.cs.bp.bpjs.model.StringBProgram;

public class Service {

	public String code;
	private BProgram bprog;
//	private PrintStream aStream;
	private final ExecutorService execSvc;
	
	
	private RunLogger runLogger;
	
	
	public Service(Session session, ExecutorService execSvc) {
		this.execSvc = execSvc;
		this.runLogger = new RunLogger(session);
	}

	public RunLogger getRunLogger() {
		return runLogger;
	}

	public void setRunLogger(RunLogger runLogger) {
		this.runLogger = runLogger;
	}

	public void init(String code) {
		this.code = code;
		this.bprog = new StringBProgram(code);
	}

	public StepMessage step(StepMessage step) throws InterruptedException, IOException, ClassNotFoundException {
		Step s = new Step(execSvc, bprog, step.bpss);
		return s.step().toStepMessage();
	}

	public RunLogger run() {
		BProgramRunner rnr = new BProgramRunner(this.bprog);
	
		// Print program events to the console		
		rnr.addListener(new SendBProgramRunnerListener(runLogger));

		// go!
		rnr.run();
		return runLogger;
	}
	
	public void addExternalEvent(String e) {
		this.bprog.enqueueExternalEvent(new BEvent(e));
	}
}
