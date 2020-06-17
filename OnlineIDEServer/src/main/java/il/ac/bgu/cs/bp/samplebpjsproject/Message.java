package il.ac.bgu.cs.bp.samplebpjsproject;

public class Message {
	
	private String type;
	private String message;
	
	public Message(String type, String message) {
		this.type = type;
		this.message = message;
	}
	
	public Message() {
		this.type = "";
		this.message = "";
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
