#Importing Pandas
import pandas as pd

#Opening CSV Readers
vaccine_df = pd.read_csv('https://covid19.who.int/who-data/vaccination-data.csv')

#Reading the contents of all snippets
header = open('snippets/header.html').read()
footer = open('snippets/footer.html').read()

#Adding header info to our html markup
html = ""
html += header

#Adding Data in HTML Markup
html += "<table>"
html += """
<tr class='header'>
 <td class='name'>Country</td>
 <td>Total Vaccine</td>
 <td>Total Vaccine Per 100</td>
 <td>Total 1 Dose Vaccinated</td>
 <td>Total 1 Dose Vaccinated Per 100</td>
 <td>Total Fully Vaccinated</td>
 <td>Total Fully Vaccinated Per 100</td>
</tr>
"""

for i in range(len(vaccine_df['COUNTRY'])):
  html += """
    <tr>
      <td class='name'>%s</td>
      <td>%s</td>
      <td>%s</td>
      <td>%s</td>
      <td>%s</td>
      <td>%s</td>
      <td>%s</td>
    </tr>
  """ % (vaccine_df['COUNTRY'][i], 
  vaccine_df['TOTAL_VACCINATIONS'][i],
  vaccine_df['TOTAL_VACCINATIONS_PER100'][i],
  vaccine_df['PERSONS_VACCINATED_1PLUS_DOSE'][i],
  vaccine_df['PERSONS_VACCINATED_1PLUS_DOSE_PER100'][i],
  vaccine_df['PERSONS_FULLY_VACCINATED'][i],
  vaccine_df['PERSONS_FULLY_VACCINATED_PER100'][i])

html += "</table>"

#Append Footer and write to index.html
html += footer

index = open('index.html', 'w', encoding='utf-8')
index.write(html)
index.close()