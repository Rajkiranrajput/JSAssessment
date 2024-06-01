/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let mintedNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, color, clothing, accessory) {
  // Create an NFT object
  const nft = {
    name,
    color,
    clothing,
    accessory,
  };

  // Add the NFT to our collection
  mintedNFTs.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  console.log("Minted NFTs:");
  mintedNFTs.forEach((nft, index) => {
    console.log(
      `NFT ${index + 1}: ${nft.name} - Color: ${nft.color}, Clothing: ${nft.clothing}, Accessory: ${nft.accessory}`
    );
  });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return mintedNFTs.length;
}

// call your functions below this line
mintNFT("H&M", "Blue", "T-shirt", "Gold Chain");
mintNFT("Zara", "Beige", "Hoodie", "Silver Rings");
mintNFT("Uniqlo", "Green", "Cargo Pant", "Silver Bracelet");
mintNFT("U.S Polo", "Black", "Polo Shirt", "Casio Watch");

// Show all minted NFTs
listNFTs();

console.log("Total minted NFTs:", getTotalSupply());
