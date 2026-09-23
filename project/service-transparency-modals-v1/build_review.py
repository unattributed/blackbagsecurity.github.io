#!/usr/bin/env python3
"""Build a local review route without adding a page to the public site source."""
import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('destination', type=Path)
args = parser.parse_args()
destination = args.destination.resolve()
if destination == ROOT or ROOT in destination.parents:
    parser.error('choose an evidence destination outside the source checkout')
with tempfile.TemporaryDirectory(prefix='bbs-modal-review-') as directory:
    source = Path(directory) / 'docs'
    shutil.copytree(ROOT / 'docs', source)
    shutil.copyfile(Path(__file__).with_name('harness.html'), source / 'service-transparency-review.html')
    shutil.copyfile(Path(__file__).with_name('harness.css'), source / 'assets/css/service-transparency-review.css')
    subprocess.run(['jekyll', 'build', '--source', str(source), '--destination', str(destination)], check=True)
