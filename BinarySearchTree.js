let Node = require("./Node.js");

class BinarySearchTree{
    constructor(root){
        this.setRoot(root);
        this.walkArray = [];
    }
    setRoot(root){
        if( root instanceof Node ){
            this.root = root;
            this.root.setParent(null);
        }
        else{
            throw Error("root node must be of type Node.");
        }
    }
    hasRoot(){
        if(this.root !== null && this.root !== undefined && this.root instanceof Node){
            return true;
        }
        else{
            return false;
        }
    }
    insert(number){
        if(typeof number === "number"){
            let x, y, node;
            node = new Node(number);
            x = this.root;
            y = null;
            while(x !== null){
                y = x;
                node.key < x.key ? x = x.left : x = x.right;
            }
            node.setParent(y);
            if( y == null){
                this.setRoot(node);
            }
            else if(node.key < y.key){
                y.setLeft(node);
            }
            else{
                y.setRight(node);
            }
        }
        else{
            throw Error("Parameter must be a number.");
        }
    }
    search(key){
        if(typeof key === "number"){
            let x = this.root;
            while(x !== null && x.key !== key){
                key < x.key ? x = x.left : x = x.right;
            }
            return x;
        }
        else{
            throw Error("Key must be a number.");
        }
    }
    transplant(u, v){
        if (u.parent === null){
            this.setRoot(v);
        }
        else if(u === u.parent.left){
            u.parent.left = v;
            v.parent = u.parent;
        }
        else{
            u.parent.right = v;
            v.parent = u.parent;
        }
    }
    inorderWalk(x = this.root){
        if(x !== null){
            this.inorderWalk(x.left);
            this.walkArray.push(x.key);
            this.inorderWalk(x.right);
        }
    }
    getInorderWalk(){
        this.walkArray = [];
        this.inorderWalk();
        return this.walkArray;
    }
    minimum(x = this.root){
        let y = null;
        while(x !== null){
            y = x;
            x = x.left;
        }
        return y;
    }
    maximum(x = this.root){
        let y = null;
        while(x !== null){
            y = x;
            x = x.right;
        }
        return y;
    }
    isLeaf(node){
        if(node instanceof Node){
            if(node.left === null && node.right === null){
                return true;
            }
            return false;
        }
        else{
            throw TypeError("Parameter must be an object of type Node.");
        }
    }
    deleteLeaft(node){
        if(node instanceof Node){
            if(node.parent === null){
                this.root = null;
            }
            else if(node === node.parent.left){
                node.parent.left = null;
            }
            else{
                node.parent.right = null;
            }
        }
        else{
            throw TypeError("Parameter must be an object of type Node.");
        }
    }
    delete(number){
        let node = this.search(number);
        if(node !== null){
            if(this.isLeaf(node)){
                this.deleteLeaft(node);
            }
            else if(node.left === null){
                this.transplant(node, node.right);
            }
            else if(node.right === null){
                this.transplant(node, node.left);
            }
            else{
                let y = this.minimum(node.right);
                if (y.parent !== node){
                    if(y.right !== null){
                        this.transplant(y, y.right);
                        y.right = node.right;
                        y.right.parent = y;
                    }
                }
                this.transplant(node, y);
                y.left = node.left;
                y.left.parent = y;
            }
        }
        else{
            throw Error(`The three doesn't have a ${number} key.`);
        }
    }
}
module.exports = BinarySearchTree;