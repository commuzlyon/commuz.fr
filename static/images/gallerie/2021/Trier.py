import os
from datetime import datetime
import shutil

month = [None, "janvier", "fevrier", "mars", "avril", "mail", "juin", "juillet", "aout", "septembre","octobre", "novembre", "decembre"]

if __name__ == "__main__" :
    i = 1
    for root, dirs, files in os.walk(".", topdown=False):
        for file in files:
                filename, file_extension = os.path.splitext(file)
                file_extension = file_extension.lower()
                if file_extension in ['.jpg', '.gif', '.png', '.mp4', '.mov', '.jpeg', '.heic']:
                    if os.path.isfile(file):
                        try :
                            os.rename(os.path.join(root, file), "{}.{}".format(i,file_extension))
                            print(filename)
                            i += 1
                        except :
                            print("Error with {} file.".format(file))

    print( str(i) + ' fichiers traités')

'''for file in files:
    filename, file_extension = os.path.splitext(file)
    file_extension = file_extension.lower()
    created= os.stat(file).st_ctime
    if file_extension in ['.jpg', '.gif', '.png']:
        y = datetime.fromtimestamp(created).year
        m = datetime.fromtimestamp(created).month
        str(m)
        print(m)
        newpath = str(y) + '/' + str(y) + '_' + str(m)
        if not os.path.exists(newpath):
            os.makedirs(newpath)
        os.rename(file, newpath +'/' + file)'''


