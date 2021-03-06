// Copyright (c) ppy Pty Ltd <contact@ppy.sh>. Licensed under the GNU Affero General Public License v3.0.
// See the LICENCE file in the repository root for full licence text.

import Main from 'follows-mapping/main';

reactTurbolinks.registerPersistent('follows-mapping', Main, true, () => {
  return {
    follows: osu.parseJson('json-follows-mapping'),
  };
});
