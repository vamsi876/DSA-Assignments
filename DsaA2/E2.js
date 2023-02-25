// Exercise 2: 
// Create a program that allows users to enter customer data. The customer data should include the following information:
// Customer Id
// Customer Name
// Purchase date(dd/mm/yy)
// Bill amount


// Store this information in a linked list. The program should provide three options for viewing information:

// View all customer data in sorted order based on bill amount
// View the total purchase amount for a specific year
// View details of a specific customer based on name

class node{
    constructor(CustomerId, CustomerName, PurchaseDate, BillAmount){
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.PurchaseDate = PurchaseDate;
        this.BillAmount = BillAmount;
        this.next = null;
    }
}
class LinkedList{
    constructor(CustomerId, CustomerName, PurchaseDate, BillAmount){
        this.head = {CustomerId : CustomerId, CustomerName : CustomerName, PurchaseDate : PurchaseDate, BillAmount : BillAmount, next : null};
        this.tail = this.head;
        this.length = 1

    }

    AddCustomer(CustomerId, CustomerName, PurchaseDate, BillAmount){
        const newNode = new node(CustomerId, CustomerName, PurchaseDate, BillAmount)
        if (this.head==null){
            this.head=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
            this.length++
        }
        return this

      }

    sortedOrderBasedOnBillAmount() {
    let currentNode = this.head;
    while (currentNode != null) {
      let minNode = currentNode;
      let node = currentNode.next;
      while (node != null) {
        if (node.BillAmount < minNode.BillAmount) {
          minNode = node;
        }
        node = node.next;
      }
      let temp = {
        CustomerId: currentNode.CustomerId,
        CustomerName: currentNode.CustomerName,
        PurchaseDate: currentNode.PurchaseDate,
        BillAmount: currentNode.BillAmount,
      };
      currentNode.CustomerId = minNode.CustomerId;
      currentNode.CustomerName = minNode.CustomerName;
      currentNode.PurchaseDate = minNode.PurchaseDate;
      currentNode.BillAmount = minNode.BillAmount;
      minNode.CustomerId = temp.CustomerId;
      minNode.CustomerName = temp.CustomerName;
      minNode.PurchaseDate = temp.PurchaseDate;
      minNode.BillAmount = temp.BillAmount;

      currentNode = currentNode.next;
    }

    return this;
  }

      

    purchaseAmountForSpecificYear(Year){
        let currentNode = this.head;
        var totalAmount = 0;
        while(currentNode !== null){
            if(currentNode.PurchaseDate.split("/")[2] == Year){
                totalAmount = totalAmount + currentNode.BillAmount
            }
            currentNode = currentNode.next
        }
        return `Total purchase amount for year ${Year} is ${totalAmount}`

    }
    detailsOfSpecificCustomer(CustomerName) {
        let currentNode = this.head;
        while (currentNode !== null) {
          if (currentNode.CustomerName == CustomerName) {
            return `CustomerId : ${currentNode.CustomerId}---- Purchase Date: ${currentNode.PurchaseDate} ---- Bill Amount: ${currentNode.BillAmount} `;
          }
          currentNode = currentNode.next;
        }
        
      }
      

}

const test = new LinkedList(01,"vamsi","01/02/2023",200)
test.AddCustomer(02,"krishna","03/02/2023",300).AddCustomer(03,"vk","02/02/2022",500).AddCustomer(04,"naruto","10/10/2021",100).AddCustomer(05,"kakashi","05/12/2021",330)
test.AddCustomer(06,"guy","16/06/2021",660).AddCustomer(07,"itachi","18/10/2019",1000).AddCustomer(08,"minato","01/01/2023",800).AddCustomer(09,"obito","02/02/2021",500)
console.log(test)
console.log(test.detailsOfSpecificCustomer("krishna"))
console.log(test.purchaseAmountForSpecificYear(2023))
console.log(test.purchaseAmountForSpecificYear(2021))
console.log(test.sortedOrderBasedOnBillAmount())


