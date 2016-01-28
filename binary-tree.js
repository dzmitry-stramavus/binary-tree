'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var node = {
			data: data,
			left: null,
			right: null
		};
		var current;

		if (this.root === null){
			this.root = node;
		} else {
			current = this.root;

			while(true){
				if (data < current.data){
					if (current.left === null){
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				} else if (data > current.data){
					if(current.right === null){
						current.right = node;
						break;
					} else {
						current = current.right;
					}
				} else {
					break;
				}
			}
		}

	}

	contains(data) {
		var found = false,
				current = this.root;

		// check if the value is found and it is not the end of tree
		while(!found && current){
			if (data < current.data){
				current = current.left;
			} else if (data > current.data){
				current = current.right;
			} else {
				found = true;
			}
		}
		// return the value of found (true - the value is found, false - the value is NOT found)
		return found;
	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
