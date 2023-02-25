// Create a program that accepts the student data as input from the user. The student data should contain the following information:
// Student id
// Student name
// Student marks in 5 subjects

// Store this information in a tree data structure where each node represents a single student. The tree should be a binary search tree and use the percentage of each student as a criterion for storing objects. After storing all the information, the user will enter the name of a student and his/her grades should be displayed on the screen.


class node{
    constructor(studentId, studentName, maths, physics, english, social, biology){
        this.studentId = studentId;
        this.studentName = studentName;
        this.maths = maths;
        this.physics = physics;
        this.english = english;
        this.social = social;
        this.biology = biology;
        this.percentage = ((this.maths+this.physics+this.english+this.social+this.biology)/500)*100;
        this.left = null;
        this.right = null;
    
    }
}
class binaryTree{
    constructor(){
        this.root = null;
    }

    addNode(studentId, studentName, maths, physics, english, social, biology){
        const newNode = new node(studentId, studentName, maths, physics, english, social, biology)
        if(this.root === null){
            this.root = newNode;
        }
        else{
            let currentNode = this.root;
            while(true){
                if(newNode.percentage > currentNode.percentage){
                    if(currentNode.right === null){
                        currentNode.right = newNode
                        break;
                    }
                    else{
                        currentNode = currentNode.right;
                    }
                }
                else if(newNode.percentage < currentNode.percentage){
                    if(currentNode.left === null){
                        currentNode.left = newNode
                        break;
                    }
                    else{
                        currentNode = currentNode.left
                    }
                }
            }
        }
    }
    getGradesByName(name, currentNode = this.root){
        if(currentNode === null){
            return null;
        }
        if(currentNode.studentName === name){
          return {
            studentName: currentNode.studentName,
            maths: currentNode.maths,
            physics: currentNode.physics,
            english: currentNode.english,
            social: currentNode.social,
            biology: currentNode.biology,
            percentage: currentNode.percentage
          };
        }
        else if(currentNode.studentName < name){
            return this.getGradesByName(name, currentNode.right);
        }
        else{
            return this.getGradesByName(name, currentNode.left);
        }
    }


}
let test = new binaryTree()
test.addNode(1001,"vamsi",98,97,99,97,90)
test.addNode(1002,"krishna",90,92,93,96,89)
test.addNode(1003,"vk",98,97,99,97,96)
test.addNode(1004,"naruto",95,78,88,58,56)
test.addNode(1005,"minato",100,100,100,100,100)
test.addNode(1006,"itachi",100,100,100,99,100)
test.addNode(1007,"kakashi",100,100,100,98,99)
console.log(test)
console.log(test.getGradesByName("vamsi"))

  
