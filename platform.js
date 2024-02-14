function _0x37a3(_0xb8e8eb, _0x5fe2df) {
    const _0x3c5cba = _0x3c5c();
    return _0x37a3 = function (_0x37a379, _0x368d74) {
        _0x37a379 = _0x37a379 - 0x1f4;
        let _0x103ed1 = _0x3c5cba[_0x37a379];
        return _0x103ed1;
    }, _0x37a3(_0xb8e8eb, _0x5fe2df);
}
(function (_0x1d5e5a, _0x491723) {
    const _0x515e52 = _0x37a3, _0x2b94dc = _0x1d5e5a();
    while (!![]) {
        try {
            const _0x245067 = -parseInt(_0x515e52(0x1f4)) / 0x1 + -parseInt(_0x515e52(0x1f5)) / 0x2 * (-parseInt(_0x515e52(0x1f6)) / 0x3) + -parseInt(_0x515e52(0x1f7)) / 0x4 + parseInt(_0x515e52(0x1f8)) / 0x5 * (parseInt(_0x515e52(0x1f9)) / 0x6) + parseInt(_0x515e52(0x1fa)) / 0x7 + parseInt(_0x515e52(0x1fb)) / 0x8 + -parseInt(_0x515e52(0x1fc)) / 0x9 * (parseInt(_0x515e52(0x1fd)) / 0xa);
            if (_0x245067 === _0x491723)
                break;
            else
                _0x2b94dc['push'](_0x2b94dc['shift']());
        } catch (_0x4291a0) {
            _0x2b94dc['push'](_0x2b94dc['shift']());
        }
    }
}(_0x3c5c, 0x95d90), !function () {
    const _0x3b1a42 = _0x37a3;
    class _0x9e081b {
        constructor() {
            const _0x1b1163 = _0x37a3;
            this[_0x1b1163(0x1fe)] = ![], this['isMuted'] = ![], this[_0x1b1163(0x1ff)] = ![], this[_0x1b1163(0x200)] = ![], this['tryToResumeIntervalId'] = -0x1, this[_0x1b1163(0x201)] = ![], this[_0x1b1163(0x202)] = ![];
        }
        [_0x3b1a42(0x203)]() {
            return new Promise((_0x59f49e, _0x26ed17) => {
                const _0x506630 = _0x37a3;
                try {
                    this['musicAudio'] = new _0xaa1772(), this[_0x506630(0x204)] = new _0xaa1772(), window[_0x506630(0x205)][_0x506630(0x206)]('mousedown', this['tryToResumeAudioContext'][_0x506630(0x207)](this), !![]), window['document'][_0x506630(0x206)](_0x506630(0x208), this[_0x506630(0x209)][_0x506630(0x207)](this), !![]), window[_0x506630(0x205)][_0x506630(0x206)](_0x506630(0x20a), this[_0x506630(0x20b)]['bind'](this)), this[_0x506630(0x20c)] = setInterval(this[_0x506630(0x209)]['bind'](this), 0xc8), this[_0x506630(0x20d)][_0x506630(0x20e)]()[_0x506630(0x20f)] = this[_0x506630(0x210)]['bind'](this), this[_0x506630(0x204)][_0x506630(0x20e)]()[_0x506630(0x20f)] = this[_0x506630(0x211)][_0x506630(0x207)](this), this[_0x506630(0x1fe)] = !![], this[_0x506630(0x212)] = 0x3c, _0x59f49e(!![]);
                } catch (_0x500ab0) {
                    console[_0x506630(0x213)](_0x506630(0x214), _0x500ab0), alert('Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser'), _0x59f49e(![]);
                }
            });
        }
        [_0x3b1a42(0x20b)]() {
            const _0x472c9a = _0x3b1a42;
            if (window[_0x472c9a(0x215)][_0x472c9a(0x202)])
                return;
            if (document[_0x472c9a(0x216)] == _0x472c9a(0x217))
                !this[_0x472c9a(0x218)] && (this[_0x472c9a(0x201)] = this[_0x472c9a(0x219)] = !![]), Laya[_0x472c9a(0x21a)][_0x472c9a(0x21b)] = 0x0, Laya['stage'][_0x472c9a(0x21c)] = ![], Laya['updateTimer'] && Laya[_0x472c9a(0x21d)][_0x472c9a(0x21e)](), Laya[_0x472c9a(0x21f)] && Laya[_0x472c9a(0x21f)]['pause']();
            else
                document[_0x472c9a(0x216)] == 'visible' && (this[_0x472c9a(0x201)] && (this['isVisibilityMuted'] = this['muted'] = ![]), Laya[_0x472c9a(0x21a)][_0x472c9a(0x21b)] = 0x1, Laya[_0x472c9a(0x220)][_0x472c9a(0x21c)] = !![], Laya['updateTimer'] && Laya['updateTimer'][_0x472c9a(0x221)](), Laya[_0x472c9a(0x21f)] && Laya[_0x472c9a(0x21f)][_0x472c9a(0x221)]());
        }
        ['onDBInstanceMuted']() {
        }
        ['tryToResumeAudioContext']() {
            const _0x3412c8 = _0x3b1a42;
            if (this[_0x3412c8(0x218)])
                return;
            this[_0x3412c8(0x20d)][_0x3412c8(0x222)]() && !this['bePauseMusic'] && this[_0x3412c8(0x20d)]['resume'](), this[_0x3412c8(0x204)][_0x3412c8(0x222)]() && !this['bePauseSound'] && this[_0x3412c8(0x204)][_0x3412c8(0x221)](), (!this[_0x3412c8(0x20d)][_0x3412c8(0x222)]() || !this[_0x3412c8(0x204)][_0x3412c8(0x222)]()) && (window[_0x3412c8(0x205)]['removeEventListener'](_0x3412c8(0x223), this[_0x3412c8(0x209)][_0x3412c8(0x207)](this), !![]), window[_0x3412c8(0x205)]['removeEventListener'](_0x3412c8(0x208), this['tryToResumeAudioContext'][_0x3412c8(0x207)](this), !![]), clearInterval(this[_0x3412c8(0x20c)]), this[_0x3412c8(0x20c)] = -0x1);
        }
        [_0x3b1a42(0x210)]() {
            const _0x2bdc11 = _0x3b1a42;
            this[_0x2bdc11(0x20d)][_0x2bdc11(0x222)]() && !this[_0x2bdc11(0x218)] && !this[_0x2bdc11(0x200)] && this['tryToResumeIntervalId'] === -0x1 && (window['document'][_0x2bdc11(0x206)](_0x2bdc11(0x223), this['tryToResumeAudioContext'][_0x2bdc11(0x207)](this), !![]), window[_0x2bdc11(0x205)][_0x2bdc11(0x206)]('touchstart', this[_0x2bdc11(0x209)]['bind'](this), !![]), this['tryToResumeIntervalId'] = setInterval(this['tryToResumeAudioContext'][_0x2bdc11(0x207)](this), 0xc8));
        }
        ['onSoundStatechange']() {
            const _0xdba1c0 = _0x3b1a42;
            this['soundAudio'][_0xdba1c0(0x222)]() && !this['isMuted'] && !this['bePauseSound'] && this[_0xdba1c0(0x20c)] === -0x1 && (window[_0xdba1c0(0x205)][_0xdba1c0(0x206)](_0xdba1c0(0x223), this['tryToResumeAudioContext'][_0xdba1c0(0x207)](this), !![]), window['document'][_0xdba1c0(0x206)](_0xdba1c0(0x208), this[_0xdba1c0(0x209)][_0xdba1c0(0x207)](this), !![]), this[_0xdba1c0(0x20c)] = setInterval(this['tryToResumeAudioContext'][_0xdba1c0(0x207)](this), 0xc8));
        }
        set [_0x3b1a42(0x219)](_0x23eea4) {
            const _0x22c94f = _0x3b1a42;
            this[_0x22c94f(0x218)] = _0x23eea4, this[_0x22c94f(0x218)] ? (this[_0x22c94f(0x20d)][_0x22c94f(0x224)](), this[_0x22c94f(0x204)]['suspend']()) : this[_0x22c94f(0x20c)] == -0x1 && (this[_0x22c94f(0x20c)] = setInterval(this[_0x22c94f(0x209)][_0x22c94f(0x207)](this), 0xc8));
        }
        get [_0x3b1a42(0x219)]() {
            const _0x1b002e = _0x3b1a42;
            return this[_0x1b002e(0x218)];
        }
        set [_0x3b1a42(0x21e)](_0x2f67fb) {
            const _0x4947cd = _0x3b1a42;
            this['pauseSound'] = _0x2f67fb, this[_0x4947cd(0x225)] = _0x2f67fb, !_0x2f67fb && this[_0x4947cd(0x204)][_0x4947cd(0x226)]();
        }
        get [_0x3b1a42(0x21e)]() {
            const _0x50b9d3 = _0x3b1a42;
            return this['pauseSound'] || this[_0x50b9d3(0x225)];
        }
        set [_0x3b1a42(0x227)](_0x57c9b6) {
            const _0x57f609 = _0x3b1a42;
            this['bePauseSound'] = _0x57c9b6;
            if (this[_0x57f609(0x1ff)])
                this[_0x57f609(0x204)]['suspend']();
            else {
                if (this[_0x57f609(0x218)])
                    return;
                this[_0x57f609(0x204)]['resume']();
            }
        }
        get [_0x3b1a42(0x227)]() {
            const _0x3e6dfc = _0x3b1a42;
            return this[_0x3e6dfc(0x1ff)];
        }
        get [_0x3b1a42(0x225)]() {
            return this['bePauseMusic'];
        }
        set [_0x3b1a42(0x225)](_0x40af22) {
            const _0x5561a8 = _0x3b1a42;
            this[_0x5561a8(0x200)] = _0x40af22;
            if (this['bePauseMusic'])
                this[_0x5561a8(0x20d)][_0x5561a8(0x224)]();
            else {
                if (this[_0x5561a8(0x218)])
                    return;
                this['musicAudio']['resume']();
            }
        }
        [_0x3b1a42(0x228)]() {
            const _0x14a340 = _0x3b1a42;
            this['musicAudio'][_0x14a340(0x228)](), this[_0x14a340(0x204)][_0x14a340(0x228)]();
        }
        [_0x3b1a42(0x229)](_0x57510e, _0x53a886, _0x2e6202) {
            const _0x2d995b = _0x3b1a42;
            this[_0x2d995b(0x204)][_0x2d995b(0x229)](_0x57510e, _0x53a886);
        }
        [_0x3b1a42(0x22a)](_0x3fe719) {
            const _0x59f2e0 = _0x3b1a42;
            this['musicAudio'][_0x59f2e0(0x228)](), this[_0x59f2e0(0x20d)][_0x59f2e0(0x22a)](_0x3fe719);
        }
        ['stopMusic']() {
            const _0x35d194 = _0x3b1a42;
            this[_0x35d194(0x20d)]['stopAll']();
        }
        [_0x3b1a42(0x22b)](_0x4d12f4) {
            const _0x279c22 = _0x3b1a42;
            this['soundAudio'][_0x279c22(0x22c)](_0x4d12f4);
        }
        set ['musicVolume'](_0x7ef388) {
            const _0x5b06e6 = _0x3b1a42;
            this[_0x5b06e6(0x20d)][_0x5b06e6(0x212)] = _0x7ef388;
        }
        get [_0x3b1a42(0x212)]() {
            const _0x5990da = _0x3b1a42;
            return this[_0x5990da(0x20d)]['musicVolume'];
        }
        [_0x3b1a42(0x22d)](_0x38b6d0, _0xa65371 = ![], _0x25c29b = ![]) {
            const _0x1d3f10 = _0x3b1a42;
            if (!this[_0x1d3f10(0x1fe)])
                return;
            this[_0x1d3f10(0x204)][_0x1d3f10(0x22e)](_0x38b6d0, _0xa65371, _0x25c29b);
        }
    }
    class _0x4b5b19 {
    }
    class _0xaa1772 {
        constructor() {
            const _0x5e527e = _0x3b1a42;
            this['volume'] = 0x64, this[_0x5e527e(0x22f)] = new Map(), this[_0x5e527e(0x230)] = 0x64, window[_0x5e527e(0x231)] = window[_0x5e527e(0x231)] || window[_0x5e527e(0x232)], this[_0x5e527e(0x233)] = new AudioContext();
        }
        [_0x3b1a42(0x20e)]() {
            const _0x579070 = _0x3b1a42;
            return this[_0x579070(0x233)];
        }
        [_0x3b1a42(0x222)]() {
            const _0x43ef88 = _0x3b1a42;
            return this[_0x43ef88(0x233)][_0x43ef88(0x234)] === _0x43ef88(0x235);
        }
        [_0x3b1a42(0x224)]() {
            const _0xfa0017 = _0x3b1a42;
            this['context'][_0xfa0017(0x224)]();
        }
        ['resume']() {
            const _0x551d0d = _0x3b1a42;
            this['context'][_0x551d0d(0x221)]();
        }
        [_0x3b1a42(0x226)]() {
            const _0x372d77 = _0x3b1a42, _0x5e9035 = this[_0x372d77(0x22f)]['values']();
            for (const _0x3e7e87 of _0x5e9035) {
                const _0x26c87c = _0x3e7e87['instance'];
                if (_0x26c87c['source'][_0x372d77(0x236)] && !_0x26c87c[_0x372d77(0x237)][_0x372d77(0x238)]) {
                    try {
                        _0x26c87c[_0x372d77(0x237)][_0x372d77(0x22c)](this['context']['currentTime']);
                    } catch (_0x756b6b) {
                        _0x26c87c[_0x372d77(0x237)][_0x372d77(0x239)]();
                    }
                    _0x26c87c[_0x372d77(0x237)]['onended'] = function () {
                    }, _0x26c87c[_0x372d77(0x23a)]();
                }
            }
        }
        ['stopAll']() {
            const _0x2b73be = _0x3b1a42, _0x5d6ce5 = this[_0x2b73be(0x22f)][_0x2b73be(0x23b)]();
            for (const _0x3ec95f of _0x5d6ce5) {
                const _0x570286 = _0x3ec95f[_0x2b73be(0x23c)];
                if (_0x570286[_0x2b73be(0x237)][_0x2b73be(0x236)]) {
                    try {
                        _0x570286[_0x2b73be(0x237)]['stop'](this[_0x2b73be(0x233)][_0x2b73be(0x23d)]);
                    } catch (_0x5406e3) {
                        _0x570286['source'][_0x2b73be(0x239)]();
                    }
                    _0x570286[_0x2b73be(0x237)][_0x2b73be(0x23e)] = function () {
                    }, _0x570286[_0x2b73be(0x23a)]();
                }
            }
        }
        [_0x3b1a42(0x22c)](_0x5f28fb) {
            const _0x5e226e = _0x3b1a42;
            if (this[_0x5e226e(0x22f)][_0x5e226e(0x23f)](_0x5f28fb)) {
                const _0x1b67e2 = this[_0x5e226e(0x22f)][_0x5e226e(0x240)](_0x5f28fb);
                this['_stopSound'](_0x1b67e2);
            }
        }
        [_0x3b1a42(0x241)](_0x323292) {
            const _0x4dfdab = _0x3b1a42, _0x25ca6d = _0x323292['instance'];
            if (_0x25ca6d[_0x4dfdab(0x237)][_0x4dfdab(0x236)]) {
                try {
                    _0x25ca6d[_0x4dfdab(0x237)][_0x4dfdab(0x22c)](this[_0x4dfdab(0x233)]['currentTime']);
                } catch (_0x311a42) {
                    _0x25ca6d['source'][_0x4dfdab(0x239)]();
                }
                _0x25ca6d['source']['onended'] = function () {
                }, _0x25ca6d[_0x4dfdab(0x23a)]();
            }
        }
        [_0x3b1a42(0x22a)](_0x4e5520) {
            const _0x13ec31 = _0x3b1a42;
            this[_0x13ec31(0x242)] && this[_0x13ec31(0x241)](this['_music']), this[_0x13ec31(0x22f)][_0x13ec31(0x23f)](_0x4e5520) ? (this['_music'] = this[_0x13ec31(0x22f)][_0x13ec31(0x240)](_0x4e5520), this[_0x13ec31(0x212)] = this[_0x13ec31(0x230)], this['play'](_0x4e5520, !![])) : this[_0x13ec31(0x243)](_0x4e5520, () => {
                const _0x571a61 = _0x13ec31;
                this[_0x571a61(0x22a)](_0x4e5520);
            });
        }
        [_0x3b1a42(0x244)]() {
            const _0x5d82a9 = _0x3b1a42;
            this[_0x5d82a9(0x242)] && this[_0x5d82a9(0x241)](this[_0x5d82a9(0x242)]);
        }
        set ['musicVolume'](_0x4f0694) {
            const _0x4e7751 = _0x3b1a42;
            this[_0x4e7751(0x230)] = _0x4f0694, this[_0x4e7751(0x242)] && (this['_music'][_0x4e7751(0x23c)][_0x4e7751(0x245)][_0x4e7751(0x245)][_0x4e7751(0x246)] = this['_musicVolume'] / 0x64);
        }
        get [_0x3b1a42(0x212)]() {
            const _0x5b7c0a = _0x3b1a42;
            return this[_0x5b7c0a(0x230)];
        }
        [_0x3b1a42(0x22e)](_0x3fa33f, _0x373005 = ![], _0x224cee = ![]) {
            const _0x4cb4d1 = _0x3b1a42;
            if (this[_0x4cb4d1(0x22f)]['has'](_0x3fa33f)) {
                const _0x38a313 = this[_0x4cb4d1(0x22f)][_0x4cb4d1(0x240)](_0x3fa33f), _0x12452d = _0x38a313[_0x4cb4d1(0x23c)];
                if (_0x224cee && !_0x12452d[_0x4cb4d1(0x247)])
                    return;
                this[_0x4cb4d1(0x22c)](_0x3fa33f);
                if (_0x38a313[_0x4cb4d1(0x236)])
                    try {
                        if (window['WebAudioEngine'][_0x4cb4d1(0x21e)] && !_0x373005)
                            return;
                        _0x12452d[_0x4cb4d1(0x248)](this[_0x4cb4d1(0x233)][_0x4cb4d1(0x23d)], _0x38a313['buffer']), _0x12452d[_0x4cb4d1(0x237)]['loop'] = _0x373005;
                    } catch (_0x4fcbbd) {
                        console[_0x4cb4d1(0x249)]('playBuffer\x20error.\x20Exception:\x20' + _0x4fcbbd);
                    }
            } else
                this[_0x4cb4d1(0x243)](_0x3fa33f, () => {
                    const _0x10dbff = _0x4cb4d1;
                    this[_0x10dbff(0x22e)](_0x3fa33f, _0x373005);
                });
        }
        ['load'](_0x2fb3f8, _0x3dc15b) {
            const _0x5d35d4 = _0x3b1a42;
            let _0x513746 = _0x2fb3f8[_0x5d35d4(0x24a)], _0x8c2b59 = 0x0;
            for (let _0x3c2bfb = 0x0; _0x3c2bfb < _0x2fb3f8['length']; _0x3c2bfb++) {
                const _0xd99508 = _0x2fb3f8[_0x3c2bfb];
                this[_0x5d35d4(0x243)](_0xd99508, () => {
                    _0x8c2b59++, _0x8c2b59 >= _0x513746 && (_0x3dc15b && _0x3dc15b());
                });
            }
        }
        [_0x3b1a42(0x24b)](_0x1c8cb8) {
            const _0x297bf8 = _0x3b1a42;
            if (this['_audioInstances'][_0x297bf8(0x23f)](_0x1c8cb8)) {
                const _0x429d2a = this[_0x297bf8(0x22f)]['get'](_0x1c8cb8);
                _0x429d2a[_0x297bf8(0x23c)]['threeD'] = !![];
            }
        }
        [_0x3b1a42(0x24c)]() {
            const _0xb10ecc = _0x3b1a42;
            let _0x202681 = this[_0xb10ecc(0x233)];
            const _0x12b845 = {
                'gain': _0x202681[_0xb10ecc(0x24d)](),
                'panner': _0x202681[_0xb10ecc(0x24e)](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x26ce65, _0x3411ee, _0x86f1cc) {
                    const _0x4487d8 = _0xb10ecc;
                    this[_0x4487d8(0x237)][_0x4487d8(0x236)] = _0x3411ee;
                    var _0x794897 = this;
                    this[_0x4487d8(0x247)] = ![], this[_0x4487d8(0x237)]['onended'] = function () {
                        const _0x394b21 = _0x4487d8;
                        _0x794897['setup'](), _0x794897[_0x394b21(0x247)] = !![];
                    }, this[_0x4487d8(0x237)][_0x4487d8(0x24f)](_0x26ce65, _0x86f1cc);
                },
                'setup': function () {
                    const _0x3ec05f = _0xb10ecc;
                    this[_0x3ec05f(0x237)] = _0x202681[_0x3ec05f(0x250)](), this[_0x3ec05f(0x251)]();
                },
                'setupPanning': function () {
                    const _0x3dde38 = _0xb10ecc;
                    this['threeD'] ? (this[_0x3dde38(0x237)]['disconnect'](), this[_0x3dde38(0x237)][_0x3dde38(0x252)](this[_0x3dde38(0x253)]), this['panner'][_0x3dde38(0x252)](this[_0x3dde38(0x245)])) : (this[_0x3dde38(0x253)][_0x3dde38(0x239)](), this[_0x3dde38(0x237)][_0x3dde38(0x252)](this[_0x3dde38(0x245)]));
                }
            };
            return _0x12b845[_0xb10ecc(0x253)][_0xb10ecc(0x254)] = 0x0, _0x12b845['gain'][_0xb10ecc(0x252)](this[_0xb10ecc(0x233)][_0xb10ecc(0x255)]), _0x12b845[_0xb10ecc(0x23a)](), _0x12b845;
        }
        [_0x3b1a42(0x229)](_0x4ce9fb, _0x4e492e, _0x119e85) {
            const _0x44534a = _0x3b1a42, _0x259650 = new _0x4b5b19();
            _0x259650[_0x44534a(0x256)] = _0x4ce9fb, _0x259650['instance'] = this[_0x44534a(0x24c)](), this[_0x44534a(0x22f)][_0x44534a(0x257)](_0x4ce9fb, _0x259650), this[_0x44534a(0x233)][_0x44534a(0x258)](_0x4e492e, function (_0x4f8794) {
                const _0x23f577 = _0x44534a;
                _0x259650[_0x23f577(0x236)] = _0x4f8794, _0x119e85 && _0x119e85();
            }, function (_0x5f1895) {
                const _0x2aea72 = _0x44534a;
                _0x259650['error'] = !![], _0x119e85 && _0x119e85(), console['log'](_0x2aea72(0x259) + _0x259650[_0x2aea72(0x256)]);
            });
        }
        ['downloadArrayBuffer'](_0x1ac80f, _0x15bf57) {
            const _0x14a22c = _0x3b1a42;
            if (this[_0x14a22c(0x22f)][_0x14a22c(0x23f)](_0x1ac80f)) {
                _0x15bf57 && _0x15bf57();
                return;
            }
            const _0x2fdf65 = this;
            var _0x44004f = new XMLHttpRequest();
            _0x44004f[_0x14a22c(0x25a)](_0x14a22c(0x25b), _0x1ac80f, !![]), _0x44004f[_0x14a22c(0x25c)] = _0x14a22c(0x25d), _0x44004f[_0x14a22c(0x25e)] = function () {
                const _0x112862 = _0x14a22c;
                if (_0x44004f[_0x112862(0x25f)] === 0xc8 || _0x44004f['status'] === 0x0)
                    _0x2fdf65[_0x112862(0x229)](_0x1ac80f, _0x44004f[_0x112862(0x260)], _0x15bf57);
                else
                    throw _0x112862(0x261);
            }, _0x44004f[_0x14a22c(0x262)] = function () {
                const _0x269ce6 = _0x14a22c;
                _0x15bf57 && _0x15bf57();
                throw _0x269ce6(0x261);
            }, _0x44004f[_0x14a22c(0x263)] = function () {
                _0x15bf57 && _0x15bf57();
            }, _0x44004f[_0x14a22c(0x264)] = function () {
                _0x15bf57 && _0x15bf57();
            }, _0x44004f[_0x14a22c(0x265)](null);
        }
    }
    const _0x21b494 = window[_0x3b1a42(0x215)] = new _0x9e081b();
    class _0x26bcd0 {
        constructor() {
            const _0x309fa1 = _0x3b1a42;
            this[_0x309fa1(0x266)] = ![], this[_0x309fa1(0x267)] = '', this[_0x309fa1(0x268)] = '', this['to_'] = '', this[_0x309fa1(0x269)] = null, this[_0x309fa1(0x26a)] = ![], this['needStartUp'] = !![], this[_0x309fa1(0x26b)]();
        }
        static [_0x3b1a42(0x26c)]() {
            const _0x54be4c = _0x3b1a42;
            return !this[_0x54be4c(0x26d)] && (this[_0x54be4c(0x26d)] = new _0x26bcd0()), this['_instance'];
        }
        [_0x3b1a42(0x26b)]() {
            const _0x3c9b18 = _0x3b1a42;
            let _0x34b65b = document[_0x3c9b18(0x26e)](_0x3c9b18(0x26f));
            _0x34b65b && (_0x34b65b[_0x3c9b18(0x206)](_0x3c9b18(0x270), this['onNavigate_'][_0x3c9b18(0x207)](this)), _0x34b65b['addEventListener'](_0x3c9b18(0x271), this[_0x3c9b18(0x272)][_0x3c9b18(0x207)](this)));
        }
        [_0x3b1a42(0x272)]() {
            const _0x3675b6 = _0x3b1a42;
            this[_0x3675b6(0x266)] && YYGGames[_0x3675b6(0x273)](this[_0x3675b6(0x267)], this['action_'], this['to_']), this[_0x3675b6(0x266)] = ![];
        }
        [_0x3b1a42(0x274)](_0x2dd642) {
            let _0x3e7376 = null;
            try {
                let _0x4fa057 = Laya['LocalStorage']['getItem'](_0x2dd642);
                _0x3e7376 = JSON['parse'](_0x4fa057);
            } catch (_0x1a53cb) {
            }
            return _0x3e7376;
        }
        [_0x3b1a42(0x275)](_0x499954, _0x4254e3) {
            const _0x30ef19 = _0x3b1a42;
            return Laya[_0x30ef19(0x276)]['setItem'](_0x499954, JSON[_0x30ef19(0x277)](_0x4254e3));
        }
        ['navigate'](_0x4eb3a5, _0x513336, _0x218d45) {
            const _0x23d41a = _0x3b1a42;
            this[_0x23d41a(0x266)] === ![] && (this['screen_'] = _0x4eb3a5, this['action_'] = _0x513336, this[_0x23d41a(0x278)] = _0x218d45, this[_0x23d41a(0x266)] = !![]);
        }
        [_0x3b1a42(0x279)]() {
            _0x21b494['muted'] = !![];
        }
        ['onfocus']() {
            const _0xb2b241 = _0x3b1a42;
            _0x21b494[_0xb2b241(0x219)] = ![];
        }
        ['showInterstitial'](_0x2e0970) {
            const _0x44ff3e = _0x3b1a42;
            console[_0x44ff3e(0x213)](_0x44ff3e(0x27a)), YYGGames[_0x44ff3e(0x27b)]({
                'beforeShowAd': () => {
                    const _0x82010f = _0x44ff3e;
                    window[_0x82010f(0x215)][_0x82010f(0x202)] = !![], this[_0x82010f(0x279)](), Laya['timer']['scale'] = 0x0, Laya[_0x82010f(0x220)][_0x82010f(0x21c)] = ![], Laya[_0x82010f(0x21d)] && Laya[_0x82010f(0x21d)][_0x82010f(0x21e)](), Laya[_0x82010f(0x21f)] && Laya['physicsTimer'][_0x82010f(0x21e)]();
                },
                'afterShowAd': () => {
                    const _0x2e0a7f = _0x44ff3e;
                    window[_0x2e0a7f(0x27c)](), this['onfocus'](), window[_0x2e0a7f(0x215)]['adShowing'] = ![], Laya['timer'][_0x2e0a7f(0x21b)] = 0x1, Laya[_0x2e0a7f(0x220)][_0x2e0a7f(0x21c)] = !![], Laya[_0x2e0a7f(0x21d)] && Laya[_0x2e0a7f(0x21d)][_0x2e0a7f(0x221)](), Laya['physicsTimer'] && Laya[_0x2e0a7f(0x21f)][_0x2e0a7f(0x221)](), _0x2e0970 && _0x2e0970();
                }
            });
        }
        [_0x3b1a42(0x27d)](_0x135937, _0x17e0f2) {
            const _0x2a24b5 = _0x3b1a42;
            console[_0x2a24b5(0x213)]('激励广告');
            if (!YYGGames['canShowReward']()) {
                this[_0x2a24b5(0x27e)](_0x2a24b5(0x27f));
                return;
            }
            YYGGames[_0x2a24b5(0x27d)]({
                'beforeShowAd': () => {
                    const _0x9db1cf = _0x2a24b5;
                    window['WebAudioEngine'][_0x9db1cf(0x202)] = !![], this['onblur'](), Laya[_0x9db1cf(0x21a)][_0x9db1cf(0x21b)] = 0x0, Laya['stage']['renderingEnabled'] = ![], Laya['updateTimer'] && Laya[_0x9db1cf(0x21d)]['pause'](), Laya['physicsTimer'] && Laya[_0x9db1cf(0x21f)][_0x9db1cf(0x21e)]();
                },
                'afterShowAd': () => {
                    const _0x39955a = _0x2a24b5;
                    window[_0x39955a(0x27c)](), this['onfocus'](), window[_0x39955a(0x215)][_0x39955a(0x202)] = ![], Laya[_0x39955a(0x21a)][_0x39955a(0x21b)] = 0x1, Laya['stage'][_0x39955a(0x21c)] = !![], Laya[_0x39955a(0x21d)] && Laya[_0x39955a(0x21d)][_0x39955a(0x221)](), Laya['physicsTimer'] && Laya[_0x39955a(0x21f)][_0x39955a(0x221)]();
                },
                'rewardComplete': () => {
                    _0x135937 && _0x135937(), _0x135937 = null;
                },
                'rewardDismissed': () => {
                    const _0x170dda = _0x2a24b5;
                    _0x17e0f2 && (_0x17e0f2(), _0x17e0f2 = null), this['prompt'](_0x170dda(0x280));
                }
            });
        }
        [_0x3b1a42(0x281)](_0x1ef1cf) {
            const _0x284bc5 = _0x3b1a42;
            _0x1ef1cf[_0x284bc5(0x282)] = new Laya[(_0x284bc5(0x283))](_0x1ef1cf, function (_0x23a7f8) {
                const _0x1cbc2e = _0x284bc5;
                _0x23a7f8[_0x1cbc2e(0x284)](Laya[_0x1cbc2e(0x285)][_0x1cbc2e(0x286)]), _0x23a7f8['on'](Laya['Event'][_0x1cbc2e(0x286)], _0x23a7f8, () => {
                    const _0x1e00e7 = _0x1cbc2e;
                    _0x26bcd0['getInstance']()['navigate'](_0x1e00e7(0x287), _0x1e00e7(0x288), _0x23a7f8['dataSource']['id']);
                });
            }), _0x1ef1cf['array'] = _0x26bcd0[_0x284bc5(0x26c)]()[_0x284bc5(0x289)]();
        }
        [_0x3b1a42(0x27e)](_0x204997, _0x9492ef) {
            const _0x2f7fc6 = _0x3b1a42;
            !this['prompt_'] && (this[_0x2f7fc6(0x269)] = document['createElement'](_0x2f7fc6(0x28a)), this['prompt_'][_0x2f7fc6(0x28b)]['cssText'] = _0x2f7fc6(0x28c), document[_0x2f7fc6(0x28d)]['appendChild'](this[_0x2f7fc6(0x269)]));
            this[_0x2f7fc6(0x269)][_0x2f7fc6(0x28e)] = _0x204997;
            let _0x3dcd10 = document[_0x2f7fc6(0x26e)](_0x2f7fc6(0x26f));
            _0x3dcd10 && (console['log'](_0x2f7fc6(0x28f), this['prompt_'][_0x2f7fc6(0x28b)]), console[_0x2f7fc6(0x213)]('this.prompt_.style.width', _0x3dcd10[_0x2f7fc6(0x290)]), this[_0x2f7fc6(0x269)][_0x2f7fc6(0x28b)][_0x2f7fc6(0x291)] = _0x3dcd10[_0x2f7fc6(0x290)] * 0.8), _0x9492ef = isNaN(_0x9492ef) ? 0x7d0 : _0x9492ef, this[_0x2f7fc6(0x269)]['style']['display'] = _0x2f7fc6(0x292), this[_0x2f7fc6(0x269)][_0x2f7fc6(0x28b)]['opacity'] = '1', setTimeout(function () {
                const _0x4861e = _0x2f7fc6;
                var _0x26df3a = 0.5;
                this[_0x4861e(0x269)][_0x4861e(0x28b)][_0x4861e(0x293)] = '-webkit-transform\x20' + _0x26df3a + _0x4861e(0x294) + _0x26df3a + 's\x20ease-in', this['prompt_'][_0x4861e(0x28b)][_0x4861e(0x295)] = '0', this[_0x4861e(0x269)][_0x4861e(0x28b)]['display'] = _0x4861e(0x296);
            }[_0x2f7fc6(0x207)](this), _0x9492ef);
        }
        [_0x3b1a42(0x289)]() {
            const _0x5e4764 = _0x3b1a42;
            let _0x42e2bb = YYGGames[_0x5e4764(0x297)] || [], _0xa45218 = _0x42e2bb[_0x5e4764(0x298)]();
            for (let _0x1a61a6 = 0x0, _0x40b260 = _0xa45218['length']; _0x1a61a6 < _0x40b260; _0x1a61a6++) {
                const _0x43b9c4 = Math['floor'](Math[_0x5e4764(0x299)]() * (_0x1a61a6 + 0x1)), _0x78ad30 = _0xa45218[_0x43b9c4];
                _0xa45218[_0x43b9c4] = _0xa45218[_0x1a61a6], _0xa45218[_0x1a61a6] = _0x78ad30;
            }
            return _0xa45218;
        }
        ['createLogo']() {
            const _0x100dc4 = _0x3b1a42, _0x4dee45 = new Laya[(_0x100dc4(0x29a))]();
            return _0x4dee45['skin'] = _0x100dc4(0x29b), _0x4dee45[_0x100dc4(0x29c)] = 0x30d40, window[_0x100dc4(0x29d)] = _0x4dee45, _0x4dee45;
        }
        [_0x3b1a42(0x29e)](_0x4767c2, _0x32dad3) {
            const _0x3fe833 = _0x3b1a42;
            !this[_0x3fe833(0x29f)] && (_0x32dad3 && _0x32dad3());
            if (this['initialized_'])
                return;
            this[_0x3fe833(0x2a0)](), this['createLoading'](), window[_0x3fe833(0x215)][_0x3fe833(0x203)]()['then'](() => {
                const _0x83d85c = _0x3fe833;
                Laya['SoundManager'][_0x83d85c(0x22a)] = function (_0x1c7702) {
                    const _0x43d787 = _0x83d85c;
                    window[_0x43d787(0x215)] && window[_0x43d787(0x215)][_0x43d787(0x22a)](_0x1c7702);
                }, Laya[_0x83d85c(0x2a1)][_0x83d85c(0x22d)] = function (_0x550c65, _0x3299d9 = ![]) {
                    const _0xdf43d = _0x83d85c;
                    window[_0xdf43d(0x215)] && window[_0xdf43d(0x215)][_0xdf43d(0x22d)](_0x550c65, ![]);
                }, Laya[_0x83d85c(0x2a1)][_0x83d85c(0x244)] = function () {
                    const _0x150aff = _0x83d85c;
                    window[_0x150aff(0x215)] && window[_0x150aff(0x215)][_0x150aff(0x244)]();
                }, Laya['SoundManager'][_0x83d85c(0x22b)] = function (_0x3bea4e) {
                    const _0x5ccc96 = _0x83d85c;
                    window[_0x5ccc96(0x215)] && window[_0x5ccc96(0x215)][_0x5ccc96(0x22b)](_0x3bea4e);
                };
            }), this[_0x3fe833(0x26a)] = !![], Laya[_0x3fe833(0x2a2)]['load'](_0x3fe833(0x2a3), Laya[_0x3fe833(0x283)][_0x3fe833(0x2a4)](this, _0x49bfda => {
                const _0x1b7a92 = _0x3fe833;
                YYGGames[_0x1b7a92(0x2a5)]({
                    'appName': _0x4767c2,
                    'config': _0x49bfda,
                    'complete': () => {
                        const _0x1801e1 = _0x1b7a92, _0x214be4 = YYGGames[_0x1801e1(0x2a6)]();
                        switch (_0x214be4) {
                        case AdPlatformType['en_GAMEDISTRIBUTION']:
                        case AdPlatformType[_0x1801e1(0x2a7)]:
                            window[_0x1801e1(0x29d)] && (window[_0x1801e1(0x29d)]['scale'](0x0, 0x0), window[_0x1801e1(0x29d)]['removeSelf']());
                            break;
                        default:
                            window[_0x1801e1(0x29d)] && Laya['stage']['addChild'](window[_0x1801e1(0x29d)]);
                            break;
                        }
                        this['needStartUp'] = ![], _0x32dad3 && _0x32dad3();
                    }
                });
            }));
        }
        [_0x3b1a42(0x2a8)](_0x109fc7) {
            const _0x2c2a36 = _0x3b1a42;
            _0x109fc7 ? YYGGames['showBanner'](_0x109fc7) : YYGGames[_0x2c2a36(0x2a8)]();
        }
        [_0x3b1a42(0x2a9)]() {
            YYGGames['hideBanner']();
        }
        [_0x3b1a42(0x2aa)](_0x53961f) {
            const _0x4dabef = _0x3b1a42;
            _0x53961f ? YYGGames[_0x4dabef(0x2aa)](_0x53961f) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            const _0xdb8359 = _0x3b1a42;
            YYGGames[_0xdb8359(0x2ab)]();
        }
        [_0x3b1a42(0x2ac)](_0x2d3a9b, _0xdeee02) {
            const _0x468009 = _0x3b1a42;
            !this[_0x468009(0x29f)] && (_0xdeee02 && _0xdeee02());
            if (this[_0x468009(0x26a)])
                return;
            this[_0x468009(0x2a0)](), this[_0x468009(0x2ad)](), window[_0x468009(0x215)][_0x468009(0x203)]()[_0x468009(0x2ae)](() => {
                const _0x3fa3b9 = _0x468009;
                Laya['SoundManager'][_0x3fa3b9(0x22a)] = function (_0x1159e9) {
                    const _0x2e35ec = _0x3fa3b9;
                    window['WebAudioEngine'] && window[_0x2e35ec(0x215)][_0x2e35ec(0x22a)](_0x1159e9);
                }, Laya['SoundManager']['playSound'] = function (_0x59da27, _0x301fff = ![]) {
                    const _0x5b819b = _0x3fa3b9;
                    window[_0x5b819b(0x215)] && window['WebAudioEngine'][_0x5b819b(0x22d)](_0x59da27, ![]);
                }, Laya[_0x3fa3b9(0x2a1)][_0x3fa3b9(0x244)] = function () {
                    const _0x3e6fc4 = _0x3fa3b9;
                    window[_0x3e6fc4(0x215)] && window[_0x3e6fc4(0x215)][_0x3e6fc4(0x244)]();
                }, Laya[_0x3fa3b9(0x2a1)][_0x3fa3b9(0x22b)] = function (_0x530d6b) {
                    const _0x24942b = _0x3fa3b9;
                    window['WebAudioEngine'] && window['WebAudioEngine'][_0x24942b(0x22b)](_0x530d6b);
                };
            }), this['initialized_'] = !![], Laya['loader'][_0x468009(0x2af)]('cnf.json', Laya[_0x468009(0x283)][_0x468009(0x2a4)](this, _0x46f6ab => {
                const _0x49b79c = _0x468009;
                YYGGames[_0x49b79c(0x2b0)]({
                    'appName': _0x2d3a9b,
                    'config': _0x46f6ab,
                    'complete': () => {
                        const _0x23cef5 = _0x49b79c, _0x2c951c = YYGGames[_0x23cef5(0x2a6)]();
                        switch (_0x2c951c) {
                        case AdPlatformType['en_GAMEDISTRIBUTION']:
                        case AdPlatformType[_0x23cef5(0x2a7)]:
                            window['yad'] && (window[_0x23cef5(0x29d)][_0x23cef5(0x21b)](0x0, 0x0), window['yad'][_0x23cef5(0x2b1)]());
                            break;
                        default:
                            window['yad'] && Laya[_0x23cef5(0x220)][_0x23cef5(0x2b2)](window[_0x23cef5(0x29d)]);
                            break;
                        }
                        this[_0x23cef5(0x29f)] = ![], _0xdeee02 && _0xdeee02();
                    }
                });
            }));
        }
        [_0x3b1a42(0x2a0)]() {
            const _0x236f8d = _0x3b1a42;
            if (!Laya[_0x236f8d(0x2b3)] || !Laya[_0x236f8d(0x2b4)])
                return;
            let _0x1d6a3c = {
                'x': 0x0,
                'type': _0x236f8d(0x2b5),
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': _0x236f8d(0x2b5),
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': _0x236f8d(0x2b6),
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': _0x236f8d(0x2b7),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': _0x236f8d(0x2b8),
                        'searchKey': _0x236f8d(0x2b9),
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': 'spr_tip',
                            'presetID': 0x2,
                            'preset': _0x236f8d(0x2b6),
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': 'spr_tip',
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': 'spr_tip',
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': _0x236f8d(0x2ba),
                                'searchKey': 'Rect',
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': _0x236f8d(0x2b6),
                                    'height': 0x21c,
                                    'fillColor': _0x236f8d(0x2bb)
                                },
                                'nodeParent': 0x4,
                                'label': _0x236f8d(0x2bc),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x236f8d(0x2bd),
                                'searchKey': _0x236f8d(0x2bd),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': _0x236f8d(0x2be),
                                    'presetID': 0x4,
                                    'preset': _0x236f8d(0x2b6),
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': '#ffffff',
                                    'align': _0x236f8d(0x2bf)
                                },
                                'nodeParent': 0x4,
                                'label': _0x236f8d(0x2c0),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x236f8d(0x2bd),
                                'searchKey': _0x236f8d(0x2bd),
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': _0x236f8d(0x2c1),
                                    'presetID': 0x5,
                                    'preset': _0x236f8d(0x2b6),
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': '#ffffff',
                                    'align': _0x236f8d(0x2bf)
                                },
                                'nodeParent': 0x4,
                                'label': _0x236f8d(0x2c0),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x236f8d(0x2bd),
                                'searchKey': _0x236f8d(0x2bd),
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x236f8d(0x2c2),
                                    'text': _0x236f8d(0x2c3),
                                    'presetID': 0x6,
                                    'preset': _0x236f8d(0x2b6),
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': _0x236f8d(0x2c4),
                                    'align': _0x236f8d(0x2bf)
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVideo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x9,
                                'child': []
                            }
                        ]
                    }],
                'animations': [{
                        'nodes': [],
                        'name': 'ani1',
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }]
            };
            class _0x39034e extends Laya[_0x236f8d(0x2b4)] {
                constructor() {
                    super();
                }
                [_0x236f8d(0x2c5)]() {
                    const _0x4ad904 = _0x236f8d;
                    this[_0x4ad904(0x2c6)][_0x4ad904(0x2c7)] = 0x0, this['owner'][_0x4ad904(0x2c8)] = 0x0, this[_0x4ad904(0x2c6)]['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this[_0x4ad904(0x2c6)][_0x4ad904(0x2c9)](_0x4ad904(0x2ca)), this['owner'][_0x4ad904(0x290)] > this['owner'][_0x4ad904(0x2cb)] ? this[_0x4ad904(0x2ca)][_0x4ad904(0x21b)](this['owner'][_0x4ad904(0x2cb)] / 0x780, this[_0x4ad904(0x2c6)][_0x4ad904(0x2cb)] / 0x780) : this[_0x4ad904(0x2ca)][_0x4ad904(0x21b)](this['owner'][_0x4ad904(0x290)] / 0x438, this[_0x4ad904(0x2c6)][_0x4ad904(0x290)] / 0x438), this['spr_tip'][_0x4ad904(0x2cc)](this['owner'][_0x4ad904(0x290)] / 0x2, this[_0x4ad904(0x2c6)][_0x4ad904(0x2cb)] / 0x2), this[_0x4ad904(0x2c6)]['on'](Laya[_0x4ad904(0x285)]['CLICK'], this, this[_0x4ad904(0x2cd)]);
                }
                [_0x236f8d(0x2cd)]() {
                    const _0x6857f7 = _0x236f8d;
                    _0x26bcd0[_0x6857f7(0x26c)]()[_0x6857f7(0x2ce)]();
                }
            }
            let _0x49aa43 = new Laya['Prefab']();
            _0x49aa43[_0x236f8d(0x2cf)] = _0x1d6a3c, this[_0x236f8d(0x2d0)] = _0x49aa43[_0x236f8d(0x2a4)](), this['noVideoPer'][_0x236f8d(0x29c)] = 0x30d3f, this[_0x236f8d(0x2d0)][_0x236f8d(0x2d1)](_0x39034e);
        }
        [_0x3b1a42(0x2d2)]() {
            const _0x35c565 = _0x3b1a42;
            this[_0x35c565(0x2d0)] && Laya[_0x35c565(0x220)][_0x35c565(0x2b2)](this[_0x35c565(0x2d0)]);
        }
        ['closeNoVideo']() {
            const _0x142681 = _0x3b1a42;
            this['noVideoPer'] && this['noVideoPer'][_0x142681(0x2b1)]();
        }
        ['createLoading']() {
            const _0x10a4b6 = _0x3b1a42;
            if (!Laya[_0x10a4b6(0x2b3)] || !Laya[_0x10a4b6(0x2b4)])
                return;
            let _0xa7d165 = {
                'x': 0xf,
                'type': _0x10a4b6(0x2b5),
                'searchKey': _0x10a4b6(0x2d3),
                'props': {
                    'var': _0x10a4b6(0x2d4),
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': _0x10a4b6(0x2d4),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': _0x10a4b6(0x2b5),
                        'searchKey': _0x10a4b6(0x2b5),
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': _0x10a4b6(0x2bb),
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': _0x10a4b6(0x2b5),
                        'isOpen': !![],
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x84,
                        'child': []
                    },
                    {
                        'x': 0x1e,
                        'type': _0x10a4b6(0x2bd),
                        'searchKey': 'Label',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': 'middle',
                            'text': _0x10a4b6(0x2d5),
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': _0x10a4b6(0x2c4),
                            'centerY': 0x0,
                            'align': 'center'
                        },
                        'nodeParent': 0x83,
                        'label': _0x10a4b6(0x2bd),
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x85,
                        'child': []
                    }
                ]
            };
            class _0xd0f85f extends Laya[_0x10a4b6(0x2b4)] {
                constructor() {
                    super();
                }
                [_0x10a4b6(0x2c5)]() {
                }
                ['closePer']() {
                    _0x26bcd0['getInstance']()['closeNoVideo']();
                }
            }
            let _0xe72f84 = new Laya[(_0x10a4b6(0x2b3))]();
            _0xe72f84[_0x10a4b6(0x2cf)] = _0xa7d165, this[_0x10a4b6(0x2d6)] = _0xe72f84['create'](), this['loadingPer'][_0x10a4b6(0x29c)] = 0x30d3f, this[_0x10a4b6(0x2d6)][_0x10a4b6(0x2d1)](_0xd0f85f);
        }
        [_0x3b1a42(0x2d7)]() {
            const _0x506950 = _0x3b1a42;
            this[_0x506950(0x2d6)] && Laya['stage']['addChild'](this['loadingPer']);
        }
        [_0x3b1a42(0x2d8)]() {
            const _0x2ca704 = _0x3b1a42;
            this[_0x2ca704(0x2d6)] && this['loadingPer'][_0x2ca704(0x2b1)]();
        }
        [_0x3b1a42(0x2d9)]() {
            const _0x342de4 = _0x3b1a42;
            class _0x42567f extends Laya[_0x342de4(0x2b5)] {
                constructor() {
                    const _0x4d250b = _0x342de4;
                    super(), this['img'] = new Laya[(_0x4d250b(0x29a))](), this[_0x4d250b(0x2da)][_0x4d250b(0x2db)] = _0x4d250b(0x2dc), this[_0x4d250b(0x2dd)](0x190, 0x12c), this[_0x4d250b(0x2da)][_0x4d250b(0x2dd)](0x190, 0x12c), this[_0x4d250b(0x2b2)](this[_0x4d250b(0x2da)]);
                }
            }
            let _0x4daa8f = new Laya[(_0x342de4(0x2de))]();
            return _0x4daa8f[_0x342de4(0x2dd)](0x320, 0x258), _0x4daa8f[_0x342de4(0x2df)] = _0x42567f, _0x4daa8f;
        }
    }
    _0x26bcd0[_0x3b1a42(0x26d)] = null, window[_0x3b1a42(0x2e0)] = _0x26bcd0;
}());
function _0x3c5c() {
    const _0x5bf95e = [
        'pauseMusic',
        'stopAllNoLoop',
        'pauseSound',
        'stopAll',
        'parse',
        'playMusic',
        'stopSound',
        'stop',
        'playSound',
        'play',
        '_audioInstances',
        '_musicVolume',
        'AudioContext',
        'webkitAudioContext',
        'context',
        'state',
        'suspended',
        'buffer',
        'source',
        'loop',
        'disconnect',
        'setup',
        'values',
        'instance',
        'currentTime',
        'onended',
        'has',
        'get',
        '_stopSound',
        '_music',
        'downloadArrayBuffer',
        'stopMusic',
        'gain',
        'value',
        'ended',
        'playBuffer',
        'error',
        'length',
        'setThreeD',
        'createSoundInstance',
        'createGain',
        'createPanner',
        'start',
        'createBufferSource',
        'setupPanning',
        'connect',
        'panner',
        'rolloffFactor',
        'destination',
        'url',
        'set',
        'decodeAudioData',
        'Decode\x20error.',
        'open',
        'GET',
        'responseType',
        'arraybuffer',
        'onload',
        'status',
        'response',
        'no\x20response',
        'onerror',
        'ontimeout',
        'onabort',
        'send',
        'canNavigateActive_',
        'screen_',
        'action_',
        'prompt_',
        'initialized_',
        'initData',
        'getInstance',
        '_instance',
        'getElementById',
        'layaCanvas',
        'mouseup',
        'touchend',
        'onNavigate_',
        'navigate',
        'getStorageSync',
        'setStorageSync',
        'LocalStorage',
        'stringify',
        'to_',
        'onblur',
        '插屏广告',
        'showInterstitial',
        'focus',
        'showReward',
        'prompt',
        'No\x20Available\x20Video',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'initList',
        'renderHandler',
        'Handler',
        'offAll',
        'Event',
        'MOUSE_DOWN',
        'GAME',
        'MORE',
        'getForgames',
        'div',
        'style',
        'font-family:siyuan;max-width:80%;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;',
        'body',
        'innerHTML',
        'this.prompt_.style.width',
        'width',
        'maxWidth',
        'inline',
        'webkitTransition',
        's\x20ease-in,\x20opacity\x20',
        'opacity',
        'none',
        'forgames',
        'slice',
        'random',
        'Image',
        'yad.png',
        'zOrder',
        'yad',
        'yadstartup',
        'needStartUp',
        'createNoVideo',
        'SoundManager',
        'loader',
        'cnf.json',
        'create',
        'startupByYad',
        'getAdPlatformType',
        'en_XIAOMI',
        'showBanner',
        'hideBanner',
        'showSplash',
        'hideSplash',
        'cargamesstartup',
        'createLoading',
        'then',
        'load',
        'startupByCargames',
        'removeSelf',
        'addChild',
        'Prefab',
        'Script',
        'Box',
        'laya/pages/Prefab/NoVideo.prefab',
        'Box(NoVideo)',
        'Sprite',
        'Sprite,spr_tip,spr_tip',
        'Rect',
        '#000000',
        'Rect(NoVideo)',
        'Label',
        'VIDEO',
        'center',
        'Label(NoVideo)',
        'No\x20Video\x20Available',
        'middle',
        'Click\x20anywhere\x20to\x20close',
        '#ffffff',
        'onEnable',
        'owner',
        'top',
        'bottom',
        'getChildByName',
        'spr_tip',
        'height',
        'pos',
        'closePer',
        'closeNoVideo',
        'json',
        'noVideoPer',
        'addComponent',
        'showNoVideo',
        'Box,box_clickLayer',
        'box_clickLayer',
        'LOADING\x5cnPLEASE\x20WAIT…',
        'loadingPer',
        'showLoading',
        'closeLoading',
        'createList',
        'img',
        'name',
        'thumb',
        'size',
        'List',
        'itemRender',
        'platform',
        '513611UnRvzx',
        '10386kSYIpK',
        '459mNsvua',
        '393528ukYFOq',
        '143735IFgPVZ',
        '216aMbqbh',
        '2726234JOPfLZ',
        '9001176MSFLOD',
        '204993URoZAg',
        '930oNcmNc',
        'beEnabled',
        'bePauseSound',
        'bePauseMusic',
        'isVisibilityMuted',
        'adShowing',
        'init',
        'soundAudio',
        'document',
        'addEventListener',
        'bind',
        'touchstart',
        'tryToResumeAudioContext',
        'visibilitychange',
        'onVisibilitychange',
        'tryToResumeIntervalId',
        'musicAudio',
        'getContext',
        'onstatechange',
        'onMusicStatechange',
        'onSoundStatechange',
        'musicVolume',
        'log',
        'Web\x20Audio\x20API',
        'WebAudioEngine',
        'visibilityState',
        'hidden',
        'isMuted',
        'muted',
        'timer',
        'scale',
        'renderingEnabled',
        'updateTimer',
        'pause',
        'physicsTimer',
        'stage',
        'resume',
        'isSuspend',
        'mousedown',
        'suspend'
    ];
    _0x3c5c = function () {
        return _0x5bf95e;
    };
    return _0x3c5c();
}