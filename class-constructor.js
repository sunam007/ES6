// defining a class

class Support {
  name;
  designation = "Web Developer";
  address;
  constructor(names, addresses) {
    this.name = names;
    this.address = addresses;
  }
  supportSession() {
    console.log(
      this.name,
      "has started a support session",
      "from",
      this.address,
      "."
    );
  }
}

/* creating an object from a class;
    must put the keyword "new" while creating object from a class;
 */
const sunam = new Support("Sunam", "Patuakhali");
const setu = new Support("Setu", "Bauphal");
const raihan = new Support("Raihan", "Feni");

console.log(sunam);
sunam.supportSession();
setu.supportSession();

// we use this.property to access any property value from a class;
