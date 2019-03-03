# -*- coding: utf-8 -*-
"""
Created on Fri Mar  1 19:29:33 2019

@author: Raphaël
"""
#########################
#                       #
#     IMPORTATIONS      #
#                       #
#########################

import xlrd
import os
#import json
#import io

###################################
#                                 #
#       Lecture Classeur          #
#                                 #
###################################

wb = xlrd.open_workbook('perles.xlsx') 
sh = wb.sheet_by_name('Sheet1')

dict_perles = {}
texte = "["

n = sh.nrows
for i in range(1,n) : 
    #print(sh.cell(i,0).value + ' - ' + sh.cell(i,1).value)
    #dict_perles[sh.cell(i,0).value] = sh.cell(i,1).value
    texte+= '[' + '"' + sh.cell(i,0).value + '"' + ',' + '"' + sh.cell(i,1).value + '"' + ']' + ',' + '\n'
texte+= ']'
#print(dict_perles)
print(texte)

#with io.open('perles.json', 'w', encoding='utf-8') as perles_json:
#    json.dump(dict_perles, perles_json, ensure_ascii=False)
#
if not os.path.isfile('perles.txt'):
    f = open('perles.txt','w') #Création du fichier texte
    
    f.write(texte)
    f.close()

#os.rename('perles.txt')