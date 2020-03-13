package il.ac.bgu.cs.bp.samplebpjsproject;

import il.ac.bgu.cs.bp.bpjs.execution.listeners.BProgramRunnerListener;
import il.ac.bgu.cs.bp.bpjs.model.BEvent;
import il.ac.bgu.cs.bp.bpjs.model.BProgram;
import il.ac.bgu.cs.bp.bpjs.model.BThreadSyncSnapshot;
import il.ac.bgu.cs.bp.bpjs.model.FailedAssertion;

public class SendBProgramRunnerListener  implements BProgramRunnerListener {
	
	private RunLogger runLogg;
	
	
	public SendBProgramRunnerListener(RunLogger runLogg) {
		this.runLogg = runLogg;
	}

	@Override
	public void starting(BProgram bp) {
		this.runLogg.addBpStream("starting", "---:" + bp.getName() + " Starting");
	}

	@Override
	public void started(BProgram bp) {
		this.runLogg.addBpStream("started", "---:" + bp.getName() + " Started");
	}

	@Override
	public void superstepDone(BProgram bp) {
		this.runLogg.addBpStream("superstepDone", "---:" + bp.getName() + " No Event Selected");
	}

	@Override
	public void ended(BProgram bp) {
		this.runLogg.addBpStream("ended", "---:" + bp.getName() + " Ended");
	}

	@Override
	public void assertionFailed(BProgram bp, FailedAssertion theFailedAssertion) {
		this.runLogg.addBpStream("assertionFailed", 
				"---:" + bp.getName() + " B-thread " + theFailedAssertion.getBThreadName() + 
				" is in invalid state: " + theFailedAssertion.getMessage());
	}

	@Override
	public void bthreadAdded(BProgram bp, BThreadSyncSnapshot theBThread) {
		this.runLogg.addBpStream("bthreadAdded", "  -:" + bp.getName() + " Added " + theBThread.getName());
		
	}

	@Override
	public void bthreadRemoved(BProgram bp, BThreadSyncSnapshot theBThread) {
		this.runLogg.addBpStream("bthreadRemoved", "  -:" + bp.getName() + " Removed " + theBThread.getName());
	}
	    
	@Override
	public void bthreadDone(BProgram bp, BThreadSyncSnapshot theBThread) {
		this.runLogg.addBpStream("bthreadDone", "  -:" + bp.getName() + " Done " + theBThread.getName());
	}

	@Override
	public void eventSelected(BProgram bp, BEvent theEvent) {
		this.runLogg.addBpStream("eventSelected", " --:" + bp.getName() + " Event " + theEvent.toString());
	}

	@Override
	public void halted(BProgram bp) {
		this.runLogg.addBpStream("halted", "---:" + bp.getName() + " Halted");	
	}

}
