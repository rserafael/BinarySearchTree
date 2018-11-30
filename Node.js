class Node{
    constructor(key, parent=null, left=null, right=null){
        this.setKey(key);
        this.setParent(parent);
        this.setLeft(left);
        this.setRight(right);
    }
    setKey(key){
        if(typeof(key) === "number"){
            this.key = key;
        }
        else{
            throw Error("key must be of the type number.");
        }
    }
    setParent(parent){
        if(!(parent instanceof Node) && parent !== null){
            throw Error("parent must be a node object.");
        }
        this.parent = parent;
    }
    setLeft(left){
        if(!(left instanceof Node) && left !== null){
            throw Error("left must be a node object.");
        }
        this.left = left;
    }
    setRight(right){
        if(!(right instanceof Node) && right !== null){
            throw Error("right must be a node object.");
        }
        this.right = right;
    }
    getKey(){
        return this.key;
    }
    getLeft(){
        return this.left;
    }
    getRight(){
        return this.right;
    }
    getNodeKey(node){
        if(node instanceof Node){
            return node.key;
        }
        return null;
    }
    getLeftKey(){
        return this.getNodeKey(this.left);
    }
    getRightKey(){
        return this.getNodeKey(this.right);
    }
    getParentKey(){
        return this.getNodeKey(this.parent);
    }  
    toString(){
        let json = {};
        json.key = this.getKey();
        json.parent = this.getParentKey();
        json.left = this.getLeftKey();
        json.right = this.getRightKey();
        return "Node " + JSON.stringify(json);
    }
}

module.exports = Node;