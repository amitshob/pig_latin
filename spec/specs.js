describe('pigLatin', function(){

  it("it starts with a vowel", function(){
    expect(pigLatin("ipple")).to.equal("ippleay");
  });
  //
  //
  it("it starts with one consonant", function(){
    expect(pigLatin("table")).to.equal("abletay");
  });

  it("it starts with more than one consonants", function(){
   expect(pigLatin("thirst")).to.equal("irstthay");
  });


  // it("it starts with qu", function(){
  //  expect(pigLatin("quail")).to.equal("ailquay");
  // });
  // //
  // it("it starts with consonant followed by qu", function(){
  //  expect(pigLatin("squire")).to.equal("iresquay");
  // });
  //
});
