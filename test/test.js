let assert = require("assert");
let BinarySearchTree = require("../BinarySearchTree.js");
let Node = require("../Node.js");

let createTree = function(){
    let tree, node, number;
    number = 50;
    node = new Node(number);
    tree = new BinarySearchTree(node);
    return tree;
}

let rootTest = function(tree){
    let node, number;
    assert.strictEqual(true, tree.hasRoot());
    number = 51;
    node = new Node(number);
    tree.setRoot(node);
    assert.strictEqual(node, tree.root);
}

let insertTest = function(tree){
    let numbers =  [65, 34, 78 , 26, 54 , 12, 95, 43];
    let length = 1;
    assert.strictEqual(length, tree.getInorderWalk().length);
    while(numbers.length > 0){
        tree.insert(numbers.pop());
        length++;
        assert.strictEqual(length, tree.getInorderWalk().length);
    }
}

let minimumTest = function(tree){
    assert.strictEqual(12, tree.minimum().key);
}

let maximumTest = function(tree){
    assert.strictEqual(95, tree.maximum().key);
}

let deleteTest = function(tree){
    let numbers =  [51, 65, 34, 78 , 26, 54 , 12, 95, 43];
    let length = 9;
    assert.strictEqual(length, tree.getInorderWalk().length);
    while(numbers.length > 0){
        tree.delete(numbers.pop());
        length--;
        assert.strictEqual(length, tree.getInorderWalk().length);
    }
}

let walkTest = function(){
    let tree;
    let createNode = function(number){
        return new Node(number);
    }
    tree = new BinarySearchTree(createNode(10));
    tree.insert(5);
    tree.insert(15);
    assert.strictEqual(3, tree.getInorderWalk().length);
}

describe("Binary Search Tree: ", function(){
    let tree = createTree();
    describe("Root Test", function(){
        it("Should Insert a Node with key 51 and set it to be the root.", function(){
            rootTest(tree);
        });
        describe("Insert Test", function(){
            it("Should insert 8 new nodes in the tree.", function(){
                insertTest(tree);
            });
            describe("Minimum Test", function(){
                it("Should get the node with the minimum key which is 12.", function(){
                    minimumTest(tree);
                });
                describe("Maximum Test", function(){
                    it("Should get the node with the maximum key which is 95.", function(){
                        maximumTest(tree);
                    });
                    describe("Delete Test", function(){
                        it("Should delete all the tree's nodes.", function(){
                            deleteTest(tree);
                        });
                        describe("Walk Test", function(){
                            it("Should have 3 nodes in the walk.", function(){
                                walkTest();
                            })
                        })
                    })
                });
            })
        })
    });
});