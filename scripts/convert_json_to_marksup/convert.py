# source format in json file:
    # {
    #   "date": "2024-10-18",
    #   "thanks": "Thank you David, Bill, Rhys, Jackson, Gregory and Dan!",
    #   "streak": 1,
    #   "chumps": [
    #     {
    #       "name": "Topless in Transit: Yokohama Truck Gets a Free Roof Reduction",
    #       "url": "https://old.reddit.com/r/melbourne/comments/1g67qr9/monty_claims_another_victim/"
    #     }
    #   ],
    #   "image": "/images/2024-10-18.png",
    #   "thumb": "/images/thumbs/2024-10-18.png",
    #   "date_year": 2024,
    #   "date_week": 42,
    #   "date_aus_string": "18/10/2024"
    # },

# Goal is to convert each chump in the chumps array, as well as the parent object, into their own markdown file with format. With date_dump being 1 for the first chump, 2 for the second on a given day, etc.
# ---
# name: a
# name_slug: _aaaa-bbbb
# date: 2024-12-13
# date_chump: 1
# thanks: me
# url: "1.1"
# image: /images/chumps/next_skellington.gif
# ---

import json
import os
import re

def convert_json_to_markdown(json_file, output_dir):
    # load file into string
    with open(json_file, 'r') as f:
        file_contents = f.read()
        i = 0


    with open(json_file, 'r') as f:
        data = json.load(f)
        for bout in data:
            date_dump = 1
            for chump in bout['chumps']:
                date = bout['date']
                thanks = bout['thanks']
                date_year = bout['date_year']
                date_week = bout['date_week']
                date_aus_string = bout['date_aus_string']
                image = bout['image']
                # change path from /images/ to /public/images/chumps/
                image = re.sub(r'/images/', '/public/images/chumps/', image)
                thumb = bout['image']
                chump_name = chump['name']
                chump_url = chump['url']
                
                chump_name_slug = re.sub(r'[^a-zA-Z0-9]', '-', chump_name).lower()
                output_file = os.path.join(output_dir, f'{date}-{chump_name_slug}.md')
                with open(output_file, 'w') as f:
                    f.write(f'---\n')
                    f.write(f'name: {chump_name}\n')
                    f.write(f'name_slug: {chump_name_slug}\n')
                    f.write(f'date: {date}\n')
                    f.write(f'thanks: {thanks}\n')
                    f.write(f'url: {chump_url}\n')
                    f.write(f'image: {image}\n')
                    f.write(f'---\n')
                date_dump += 1

if __name__ == '__main__':
    #  change working directory to the scripts directory
    os.chdir(os.path.dirname(os.path.realpath(__file__)))

    # mkdir output
    os.makedirs('output', exist_ok=True)

    convert_json_to_markdown('./chumps.json', 'output')
