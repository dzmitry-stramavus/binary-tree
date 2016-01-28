'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	// creates new node with passed data and inserts it to correct place
	insert(data) {
		var node = {
			data: data,
			left: null,
			right: null
		};
		var currentNode;

		if (this.root === null){
			this.root = node;
		} else {
			currentNode = this.root;

			while(true){
				if (data < currentNode.data){
					if (currentNode.left === null){
						currentNode.left = node;
						break;
					} else {
						currentNode = currentNode.left;
					}
				} else if (data > currentNode.data){
					if(currentNode.right === null){
						currentNode.right = node;
						break;
					} else {
						currentNode = currentNode.right;
					}
				} else {
					break;
				}
			}
		}

	}

	// returns true if passed data found in binary tree, otherwise if not
	contains(data) {
		var found = false,
				currentNode = this.root;

		// check if the value is found and it is not the end of tree
		while(!found && currentNode){
			if (data < currentNode.data){
				currentNode = currentNode.left;
			} else if (data > currentNode.data){
				currentNode = currentNode.right;
			} else {
				found = true;
			}
		}
		return found;
	}

	// does nothing if passed data not found
	// removes node which contains passed data
	remove(data) {
		var currentNode = this.root,
				parentNode = null,
				replacementParent,
				replacement,
				countChildren;

		while(currentNode){
			if (data < currentNode.data){
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (data > currentNode.data){
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else {
				countChildren = (currentNode.left === null ? 0 : 1) +
												(currentNode.right === null ? 0 : 1);

				if (currentNode === this.root){
					switch(countChildren){
						case 0:
							this.root = null;
							break;
						case 1:
							this.root = (currentNode.right === null ? currentNode.left : currentNode.right);
							break;
						case 2:
							replacement = this.root.left;
							while(replacement.right !== null){
								replacementParent = replacement;
								replacement = replacement.right;
							}
							if (replacementParent !== null){
								replacementParent.right = replacement.left;
								replacement.right = this.root.right;
								replacement.left = this.root.left;
							} else {
								replacement.right = this.root.right;
							}
							this.root = replacement;
							break;
					}
				} else {
					switch(countChildren){
						case 0:
							(data > parentNode.data) ? (parentNode.right = null) : (parentNode.left = null);
							break;
						case 1:
							if (data > parentNode.data){
								parentNode.right = (currentNode.left === null ? currentNode.right : currentNode.left);
							} else {
								parentNode.left = (currentNode.left === null ? currentNode.right : currentNode.left);
							}
							break;
						case 2:
							replacement = currentNode.left;
							replacementParent = currentNode;

							while(replacement.right !== null){
								replacementParent = replacement;
								replacement = replacement.right;
							}

							replacementParent.right = replacement.left;

							replacement.right = currentNode.right;
							replacement.left = currentNode.left;

							if (currentNode.data < parentNode.data){
								parentNode.left = replacement;
							} else {
								parentNode.right = replacement;
							}
							break;
					}
				}
				currentNode = false;
			}
		}
	}

	size() {

	}

	// returns true if tree is empty, false if not
	isEmpty() {
		return this.root == null;
	}
}
