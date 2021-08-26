var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","", "g-m.jpg" , "dada.jpg", "nani.jpg", "dad (2).jpg", "mom (2).jpg", "ms.jpg", "profile picture.jpg"];
var names = ["Family Book","Mr. Dal Bahadur Singh", "Mrs. Srimati Bunnadevi Singh", "Mr. Ravindra Nath Singh", "Mrs. Devika Rani Singh", "Mr. Pramod Kumar Singh", "Mrs. Nutan Singh", "Manjari Singh", "Sagar Pratap Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
