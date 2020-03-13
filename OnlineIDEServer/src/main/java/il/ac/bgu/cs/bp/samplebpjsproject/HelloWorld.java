package il.ac.bgu.cs.bp.samplebpjsproject;

import il.ac.bgu.cs.bp.bpjs.model.BProgram;
import il.ac.bgu.cs.bp.bpjs.model.ResourceBProgram;

/**
 * Simple class running a BPjs program that selects "hello world" events.
 * @author michael
 */
public class HelloWorld {
    
    public static void main(String[] args) throws InterruptedException {
        // This will load the program file  <Project>/src/main/resources/HelloBPjsWorld.js
        final BProgram bprog = new ResourceBProgram("HelloBPjsWorld.js");
        
//        BProgramRunner rnr = new BProgramRunner(bprog);
//
//        // Print program events to the console
//        rnr.addListener( new PrintBProgramRunnerListener() );
//        
//        // go!
//        rnr.run();
        
        
        
//    	Service service = new Service(null);
//    	service.init(bprog);
//    	service.run();
    }
    
}
