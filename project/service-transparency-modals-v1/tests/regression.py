#!/usr/bin/env python3
"""Verify that adding the unused component changes no existing built output."""
import argparse
import hashlib
import json
from pathlib import Path
p = argparse.ArgumentParser(description=__doc__)
p.add_argument('baseline', type=Path)
p.add_argument('candidate', type=Path)
p.add_argument('output', type=Path)
a = p.parse_args()
records = []
for original in sorted(a.baseline.rglob('*')):
    if not original.is_file():
        continue
    relative = original.relative_to(a.baseline)
    candidate = a.candidate / relative
    assert candidate.is_file(), f'missing existing output: {relative}'
    assert original.read_bytes() == candidate.read_bytes(), f'changed existing output: {relative}'
    records.append({'path': str(relative), 'sha256': hashlib.sha256(candidate.read_bytes()).hexdigest()})
a.output.write_text(json.dumps({'status': 'pass', 'existing_outputs_unchanged': records}, indent=2)+'\n')
print(f'{len(records)} existing outputs are byte-identical')
