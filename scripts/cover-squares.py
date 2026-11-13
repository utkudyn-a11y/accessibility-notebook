# Square, text-free crops of the issue covers (the drawing on the left of each cover), for Full Issues.
import sys, numpy as np
from PIL import Image
# Usage: python3 scripts/cover-squares.py public/images public/images/squares  (run after adding a cover)
src, out = sys.argv[1], sys.argv[2]
T = 640

import glob, re
for n in sorted(int(re.search(r"notes-(\d+)-cover", p).group(1)) for p in glob.glob(f"{src}/notes-*-cover.*")):
    f = glob.glob(f'{src}/notes-{n:02d}-cover.*')[0]
    im = Image.open(f).convert('RGB'); W, H = im.size
    lum = np.asarray(im).astype(int).mean(axis=2)
    m = lum > 150
    top = int(0.165 * H)                       # below the date box
    m[:top, :] = False
    cols = m.any(axis=0)
    # the drawing ends at the first clear vertical gap after 30% of the width; the text starts after it
    run, gap = 0, None
    for x in range(int(0.30 * W), int(0.60 * W)):
        run = run + 1 if not cols[x] else 0
        if run >= int(0.018 * W): gap = x - run + 1; break
    gap = gap or int(0.42 * W)
    text = next((x for x in range(gap, W) if cols[x]), W)
    mm = m.copy(); mm[:, gap:] = False
    ys, xs = np.nonzero(mm)
    x0, x1 = np.percentile(xs, [0.3, 99.7]); y0, y1 = np.percentile(ys, [0.3, 99.7])
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    s = min(max(max(x1 - x0, y1 - y0) * 1.2, 0.62 * H), H - top, text - 0.012 * W - 0.01 * W)
    l = min(max(cx - s / 2, 0.01 * W), text - 0.012 * W - s)
    t = min(max(cy - s / 2, top), H - s)
    c = im.crop((int(l), int(t), int(l + s), int(t + s))).resize((T, T), Image.LANCZOS)
    c.save(f'{out}/notes-{n:02d}.webp', quality=82)
    c.resize((T // 2, T // 2), Image.LANCZOS).save(f'{out}/notes-{n:02d}-320.webp', quality=82)  # phones


