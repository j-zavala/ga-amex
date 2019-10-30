package ListLab;

import java.util.Iterator;

public class MyLinkedList<T> implements Iterable<T>{
	
	private Node<T> head;
	private int size = 0;
	
	public int getSize() {
		return size;
	}
	
	public void add(T obj) {
		if(head == null) {
			this.head = new Node<T>(obj);
		} else {
			Node<T> currentNode = head;
			while(currentNode.getNext() != null) {
				currentNode = currentNode.getNext();
			}
			currentNode.setNext(new Node<T>(obj));
		}
		size++;
	}
	
	public boolean remove(int index) {
		if(index < 0 || index > size) {
			return false;
		} else if(index == 0) {
			if(head.next == null) {
				head = null;
			} else {
				head = head.getNext();
			}
		} else {
			Node<T> currentNode = head;
			if (currentNode != null) {
				Node<T> prevNode = null;
				for (int i = 0; i < index; i++) {
					if (currentNode.getNext() == null) {
						return false;
					}
					prevNode = currentNode;
					currentNode = currentNode.getNext();
				}
				prevNode.setNext(currentNode.getNext());
			}
		}
		size--;
		return true;
	}
	
	public T get(int index) {
		if(index < 0 || index > size) {
			return null;
		}
		Node<T> currentNode = head;
		if(currentNode != null) {
			for(int i = 0; i < index; i++) {
				currentNode = currentNode.getNext();
			}
		}
		return currentNode.getData();
	}

	@Override
	public Iterator<T> iterator() {
		// TODO Auto-generated method stub
		return new MyIterator<T>(head);
	}
	
	private class MyIterator<T> implements Iterator<T> {

		private Node<T> node;
		
		public MyIterator(Node<T> node) {
			this.node = node;
		}
		
		@Override
		public boolean hasNext() {
			if(node != null) {
				return true;
			}
			return false;
		}

		@Override
		public T next() {
			if(this.hasNext()) {
				Node<T> current = node;
				node = node.getNext();
				return current.getData();
			} else {
				return node.getData();
			}
		}

		@Override
		public void remove() {
			// TODO Auto-generated method stub
			
		}
		
	}
}
