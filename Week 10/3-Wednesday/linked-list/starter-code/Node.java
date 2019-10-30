package ListLab;

public class Node<T> {
	Node<T> next;
	T data;
	
	public Node(T data) {
	    this(data, null);
	}
	
	public Node(T data, Node<T> next) {
	    this.next = next;
	    this.data = data;
    }
	
    public T getData() {
	    return this.data;
    }
	
	public void setData(T data) {
	    this.data = data;
	}
	
	public Node<T> getNext() {
	    return this.next;
	}
	
	public void setNext(Node<T> nextNode) {
	    this.next = nextNode;
	}
}
