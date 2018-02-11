#!/usr/bin/env python
# -*- coding: utf-8 -*-

import csv
import json
import io

dict_ratios = {}

with open('ratios.csv', newline='\n') as ratiosfile:
    with open('noms.csv', newline='\n') as nomsfile:
        ratiosreader = csv.reader(ratiosfile, delimiter=',')
        nomsreader = csv.reader(nomsfile, delimiter=',')

        noms = []
        for row in nomsreader:
            noms.append(row[0])
        
        i = 0
        for row in ratiosreader:
            ratios_noms = []
            for j in range(len(row)):
                if len(row[j]) > 0:
                    ratios_noms_cible = [noms[j] for _ in range(int(row[j]))]
                    ratios_noms.extend(ratios_noms_cible)
            dict_ratios[noms[i]] = ratios_noms
            #print(dict_ratios[noms[i]])
            i += 1

#print(dict_ratios)

with io.open('ratios.json', 'w', encoding='utf-8') as ratios_json:
    json.dump(dict_ratios, ratios_json, ensure_ascii=False)
