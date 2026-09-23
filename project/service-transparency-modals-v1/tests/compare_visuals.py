#!/usr/bin/env python3
"""Create deterministic comparison evidence; never changes implementation assets."""
import argparse
from pathlib import Path
from PIL import Image, ImageDraw

p = argparse.ArgumentParser(description=__doc__)
p.add_argument('references', type=Path)
p.add_argument('screenshots', type=Path)
p.add_argument('destination', type=Path)
a = p.parse_args()
a.destination.mkdir(parents=True, exist_ok=True)
for key in ['engagement-plan', 'executive-brief', 'remediation-guidance', 'retest-support']:
    reference = Image.open(a.references / f'APPROVED_{key.upper().replace("-", "_")}_MODAL_V1.png').convert('RGB')
    actual = Image.open(a.screenshots / f'chromium-reference-{key}.png').convert('RGB')
    assert reference.size == actual.size, 'comparison must retain the original canvas coordinates'
    width, height = reference.size
    pair = Image.new('RGB', (width * 2, height + 36), '#07131b')
    draw = ImageDraw.Draw(pair)
    draw.text((12, 10), 'APPROVED REFERENCE', fill='white')
    draw.text((width + 12, 10), 'HTML / CSS IMPLEMENTATION', fill='white')
    pair.paste(reference, (0, 36))
    pair.paste(actual, (width, 36))
    pair.save(a.destination / f'{key}-side-by-side.png')
    Image.blend(reference, actual, .5).save(a.destination / f'{key}-overlay-50.png')
