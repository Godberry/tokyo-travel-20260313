import os
import json

def parse_md_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return {
        "filename": os.path.basename(filepath),
        "content": content
    }

spots_dir = 'docs/02_景點與餐廳'
transport_dir = 'docs/03_交通指南'

spots = [parse_md_file(os.path.join(spots_dir, f)) for f in os.listdir(spots_dir) if f.endswith('.md')]
transport = [parse_md_file(os.path.join(transport_dir, f)) for f in os.listdir(transport_dir) if f.endswith('.md')]

with open('spots_data.json', 'w', encoding='utf-8') as f:
    json.dump(spots, f, ensure_ascii=False, indent=2)

with open('transport_data.json', 'w', encoding='utf-8') as f:
    json.dump(transport, f, ensure_ascii=False, indent=2)
print("done")
