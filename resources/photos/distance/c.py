import os
from PIL import Image

# save directory name
directory_name = "compressed"

# save directory name and full path
final_path = f"{os.getcwd()}\{directory_name}"

try:
    # if save directory is exist 
    if 'compressed' in  os.listdir():
        pass
    else:
        # save directory not exist 
        # create save directory 
        os.mkdir(final_path)    

except Exception as e:
    print(e)

# os.path.exists()



def compressor(file, quality ):
    
    """ 
       Parameters

       1.Current directory ,
       2. File Name
        os.path.join(os.getcwd(),file)
    
    """
    filepath = os.path.join(os.getcwd(),file)
   

    # image file open 
    picture = Image.open(filepath)
      
    
    # compress image file
    """
    Parameters
    1 . save image location
    2. save image format
    3. image optimize (True or False)
    4. image quality (1 to 100 only)   
    
    """
    picture.save(str(final_path)+"/"+file, 
                 "JPEG", 
                 optimize = True, 
                 quality = quality)
    
  

def main(quality_img):  
    # get current directory path
    cwd = os.getcwd()
  
    # only support this 3 format 
    formats = ('.jpg', '.jpeg','png')
      
    # get all file   
    for file in os.listdir(cwd):
        
        # check file and compress file 
        if os.path.splitext(file)[1].lower() in formats:
            if os.path.getsize(file) > 500000:
                print('compress file is', file)
                # call compress function
                compressor(file,quality_img)
    
    print("Work complete")
  
# Driver code
if __name__ == "__main__":
    print("enter image quality 1 to 100 ")
    # get image quality from user
    quality_img = int(input())
    main(quality_img)
