webpackJsonp([18], {
  1085: function(e, t) {
    e.exports = {
      group: 'group-wWM3zP_M-',
      noLeftDecoration: 'noLeftDecoration-15F5a1TB-',
      noRightDecoration: 'noRightDecoration-2GcAAgVb-',
      noMinimalWidth: 'noMinimalWidth-1sbl_ff5-',
    }
  },
  1086: function(e, t) {
    e.exports = { 'css-value-header-toolbar-height': '38px', wrap: 'wrap-3tiHesTk-' }
  },
  1087: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="none" stroke="currentColor" d="M1 1l15 15M1 16L16 1"/></svg>'
  },
  1088: function(e, t) {
    e.exports = { wrap: 'wrap-3K4w_7te-', icon: 'icon-1dNdRXKB-' }
  },
  1089: function(e, t) {
    e.exports = {
      wrap: 'wrap-1GG7GnNO-',
      scrollWrap: 'scrollWrap-1icOiezT-',
      noScrollBar: 'noScrollBar-2zw2auFK-',
      content: 'content-3_f7yH29-',
      icon: 'icon-2fZsO52g-',
      scrollLeft: 'scrollLeft-3OUcqYWy-',
      scrollRight: 'scrollRight-UDsPWprP-',
      isVisible: 'isVisible-zZk7F7wr-',
      iconWrap: 'iconWrap-1U8J-Qkw-',
      fadeLeft: 'fadeLeft-31arUEZY-',
      fadeRight: 'fadeRight-36gcjOQb-',
    }
  },
  1090: function(e, t) {
    e.exports = {
      fake: 'fake-37paHC6T-',
      inner: 'inner-v8eiKwdM-',
      subGroup: 'subGroup-1JpgB9zD-',
      fill: 'fill-2axUON87-',
      minimalPriority: 'minimalPriority-1MGEuVHu-',
      button: 'button-3xrjDzA4-',
      iconButton: 'iconButton-3vyD3BPg-',
      hidden: 'hidden-2kSvETGo-',
      symbolSearch: 'symbolSearch-3I4QF1U_-',
    }
  },
  1091: function(e, t) {
    e.exports = {
      'css-value-header-toolbar-height': '38px',
      toolbar: 'toolbar-2n2cwgp5-',
      isHidden: 'isHidden-GTob3P_C-',
      overflowWrap: 'overflowWrap-PWdgT-U_-',
      customButton: 'customButton--jqJTfH5-',
      hovered: 'hovered-1mGRUp3y-',
    }
  },
  700: function(e, t, n) {
    'use strict'
    function i(e) {
      var t,
        n = e.children,
        i = e.className,
        a = e.noLeftDecoration,
        o = e.noRightDecoration,
        r = e.noMinimalWidth
      return u.createElement(
        'div',
        {
          className: m(
            i,
            M.group,
            ((t = {}),
            (t[M.noMinimalWidth] = r),
            (t[M.noLeftDecoration] = a),
            (t[M.noRightDecoration] = o),
            t),
          ),
        },
        n,
      )
    }
    function a(e) {
      return u.createElement(L.a, c.a({}, e, { forceInteractive: !0, icon: B }))
    }
    function o(e) {
      return u.createElement(
        'div',
        { className: N.wrap },
        u.createElement(k.a, { className: N.icon, icon: x }),
        V.text,
      )
    }
    function r(e) {
      return (
        [
          e.findIndex(function(e) {
            return u.isValidElement(e) && !!e.key && -1 !== ('' + e.key).indexOf('view-only-badge')
          }),
          e.findIndex(function(e) {
            return u.isValidElement(e) && !!e.key && -1 !== ('' + e.key).indexOf('blue-screenshot')
          }),
          e.findIndex(function(e) {
            return u.isValidElement(e) && !!e.key && -1 !== ('' + e.key).indexOf('popup')
          }),
        ]
          .filter(function(e) {
            return e >= 0
          })
          .forEach(function(t) {
            e = u.Children.map(e, function(e, n) {
              var i, a, o
              if (u.isValidElement(e))
                switch ([t - 1, t, t + 1].indexOf(n)) {
                  case 0:
                    ;(i = { noRightDecoration: !0 }), (e = u.cloneElement(e, i))
                    break
                  case 1:
                    ;(a = { noLeftDecoration: !0, noRightDecoration: !0 }),
                      (e = u.cloneElement(e, a))
                    break
                  case 2:
                    ;(o = { noLeftDecoration: !0 }), (e = u.cloneElement(e, o))
                }
              return e
            })
          }),
        e
      )
    }
    function s(e) {
      void 0 === e && (e = [])
      var t = e.map(function(e) {
        return se[e]
      }) || [S.STYLE_CANDLES, S.STYLE_RENKO, S.STYLE_KAGI, S.STYLE_PNF]
      return (
        Object(E.isOnFeaturePage)() && !y.enabled('charting_library_base') && (t = []),
        y.enabled('widget') && (t = [S.STYLE_BARS, S.STYLE_CANDLES, S.STYLE_AREA]),
        t
      )
    }
    function l(e) {
      return (
        void 0 === e && (e = []),
        Object(Q.mergeResolutions)(e, y.enabled('star_some_intervals_by_default') ? le : [])
      )
    }
    var c,
      d,
      u,
      h,
      p,
      m,
      f,
      v,
      y,
      b,
      S,
      E,
      _,
      g,
      w,
      C,
      M,
      W,
      R,
      L,
      B,
      k,
      N,
      x,
      V,
      T,
      A,
      O,
      I,
      F,
      D,
      P,
      j,
      H,
      z,
      G,
      Y,
      U,
      K,
      J,
      Q,
      q,
      X,
      Z,
      ee,
      te,
      ne,
      ie,
      ae,
      oe,
      re,
      se,
      le,
      ce,
      de,
      ue
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (c = n(1)),
      (d = n(14)),
      (u = n(20)),
      (h = n(104)),
      (p = n(313)),
      (m = n(102)),
      (f = n(301)),
      (v = n.n(f)),
      (y = n(5)),
      (b = n(31)),
      (S = n(40)),
      (E = n(71)),
      (_ = n(205)),
      (g = n.n(_)),
      (w = n(127)),
      (C = n(106)),
      (M = n(1085)),
      (W = n(1086)),
      (R = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._handleMeasure = function(e) {
              var n = e.width
              t.props.onWidthChange(n)
            }),
            t
          )
        }
        return (
          c.c(t, e),
          (t.prototype.render = function() {
            var e = this.props.children
            return u.createElement(
              p,
              { onMeasure: this._handleMeasure, whitelist: ['width'] },
              u.createElement('div', { className: W.wrap }, e),
            )
          }),
          t
        )
      })(u.PureComponent)),
      (L = n(848)),
      (B = n(1087)),
      n(11),
      (k = n(300)),
      (N = n(1088)),
      (x = n(885)),
      (V = { text: window.t('View Only Mode') }),
      (T = n(59)),
      (A = n(194)),
      (O = n(1089)),
      (I = n(184)),
      (F = n(990)),
      (D = n(38)),
      (P = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this
          return (
            (n._wrapMeasureRef = null),
            (n._contentMeasureRef = null),
            (n._handleScrollLeft = function() {
              n.animateTo(Math.max(0, n.currentPosition() - (n.state.widthWrap - 50)))
            }),
            (n._handleScrollRight = function() {
              n.animateTo(
                Math.min(
                  (n.state.widthContent || 0) - (n.state.widthWrap || 0),
                  n.currentPosition() + (n.state.widthWrap - 50),
                ),
              )
            }),
            (n._handleResizeWrap = function(e) {
              var t = e.width
              n.setState({ widthWrap: t }), n._checkButtonsVisibility()
            }),
            (n._handleResizeContent = function(e) {
              var t = e.width
              n.setState({ widthContent: t })
            }),
            (n._handleScroll = function() {
              var e = n.props.onScroll
              e && e(n.currentPosition(), n.isAtLeft(), n.isAtRight()), n._checkButtonsVisibility()
            }),
            (n._checkButtonsVisibility = function() {
              var e, t, i, a, o
              ;(n.props.isVisibleButtons || n.props.isVisibleFade) &&
                ((e = n.state),
                (t = e.isVisibleLeftButton),
                (i = e.isVisibleRightButton),
                (a = n.isAtLeft()),
                (o = n.isAtRight()),
                a || t
                  ? a && t && n.setState({ isVisibleLeftButton: !1 })
                  : n.setState({ isVisibleLeftButton: !0 }),
                o || i
                  ? o && i && n.setState({ isVisibleRightButton: !1 })
                  : n.setState({ isVisibleRightButton: !0 }))
            }),
            (n._setWrapMeasureRef = function(e) {
              n._wrapMeasureRef = e
            }),
            (n._setContentMeasureRef = function(e) {
              n._contentMeasureRef = e
            }),
            (n.state = {
              widthContent: 0,
              widthWrap: 0,
              isVisibleRightButton: !1,
              isVisibleLeftButton: !1,
            }),
            n
          )
        }
        return (
          c.c(t, e),
          (t.prototype.componentDidMount = function() {
            this._checkButtonsVisibility()
          }),
          (t.prototype.componentDidUpdate = function(e, t) {
            ;(t.widthWrap === this.state.widthWrap && t.widthContent === this.state.widthContent) ||
              this._handleScroll(),
              this.props.shouldMeasure &&
                this._wrapMeasureRef &&
                this._contentMeasureRef &&
                (this._wrapMeasureRef.measure(), this._contentMeasureRef.measure())
          }),
          (t.prototype.currentPosition = function() {
            return this._scroll
              ? D.IS_RTL
                ? Object(D.getLTRScrollLeft)(this._scroll)
                : this._scroll.scrollLeft
              : 0
          }),
          (t.prototype.isAtLeft = function() {
            return this.currentPosition() <= 1
          }),
          (t.prototype.isAtRight = function() {
            return this.currentPosition() + this.state.widthWrap >= this.state.widthContent - 1
          }),
          (t.prototype.animateTo = function(e, t) {
            if ((void 0 === t && (t = I.dur), this._scroll)) {
              D.IS_RTL && (e = Object(D.getLTRScrollLeftOffset)(this._scroll, e))
              var n = T.findDOMNode(this._scroll)
              Object(A.doAnimate)({
                onStep: function(e, t) {
                  n.scrollLeft = Math.round(t)
                },
                from: n.scrollLeft,
                to: Math.round(e),
                easing: I.easingFunc.easeInOutCubic,
                duration: t,
              })
            }
          }),
          (t.prototype.render = function() {
            var e,
              t,
              n,
              i,
              a,
              o = this,
              r = this.props,
              s = r.children,
              l = r.isVisibleScrollbar,
              c = r.isVisibleFade,
              d = r.isVisibleButtons,
              h = r.shouldMeasure,
              f = this.state,
              v = f.widthContent,
              y = f.widthWrap,
              b = f.isVisibleRightButton,
              S = f.isVisibleLeftButton
            return u.createElement(
              p,
              {
                whitelist: ['width'],
                onMeasure: this._handleResizeWrap,
                shouldMeasure: h,
                ref: this._setWrapMeasureRef,
              },
              u.createElement(
                'div',
                { className: O.wrap },
                u.createElement(
                  'div',
                  {
                    className: m(O.scrollWrap, ((e = {}), (e[O.noScrollBar] = !l), e)),
                    onScroll: this._handleScroll,
                    ref: function(e) {
                      return (o._scroll = e)
                    },
                  },
                  u.createElement(
                    p,
                    {
                      onMeasure: this._handleResizeContent,
                      whitelist: ['width'],
                      shouldMeasure: h,
                      ref: this._setContentMeasureRef,
                    },
                    u.createElement('div', { className: O.content }, s),
                  ),
                ),
                c &&
                  u.createElement('div', {
                    className: m(O.fadeLeft, ((t = {}), (t[O.isVisible] = S && v > y), t)),
                  }),
                c &&
                  u.createElement('div', {
                    className: m(O.fadeRight, ((n = {}), (n[O.isVisible] = b && v > y), n)),
                  }),
                d &&
                  u.createElement(
                    'div',
                    {
                      className: m(O.scrollLeft, ((i = {}), (i[O.isVisible] = S && v > y), i)),
                      onClick: this._handleScrollLeft,
                    },
                    u.createElement(
                      'div',
                      { className: O.iconWrap },
                      u.createElement(k.a, { icon: F, className: O.icon }),
                    ),
                  ),
                d &&
                  u.createElement(
                    'div',
                    {
                      className: m(O.scrollRight, ((a = {}), (a[O.isVisible] = b && v > y), a)),
                      onClick: this._handleScrollRight,
                    },
                    u.createElement(
                      'div',
                      { className: O.iconWrap },
                      u.createElement(k.a, { icon: F, className: O.icon }),
                    ),
                  ),
              ),
            )
          }),
          (t.defaultProps = { isVisibleScrollbar: !0, shouldMeasure: !0 }),
          t
        )
      })(u.PureComponent)),
      (j = n(1090)),
      (function(e) {
        ;(e.SymbolSearch = 'header-toolbar-symbol-search'),
          (e.Intervals = 'header-toolbar-intervals'),
          (e.ChartStyles = 'header-toolbar-chart-styles'),
          (e.Compare = 'header-toolbar-compare'),
          (e.Indicators = 'header-toolbar-indicators'),
          (e.StudyTemplates = 'header-toolbar-study-templates'),
          (e.Alerts = 'header-toolbar-alerts'),
          (e.Layouts = 'header-toolbar-layouts'),
          (e.SaveLoad = 'header-toolbar-save-load'),
          (e.UndoRedo = 'header-toolbar-undo-redo'),
          (e.Properties = 'header-toolbar-properties')
      })(H || (H = {})),
      (z = Object(C.isFeatureEnabled)('hide-copy-readonly')),
      (G = (function(e) {
        function t(t, n) {
          var a = e.call(this, t, n) || this
          return (
            (a._activateSymbolSearchMode = function() {
              a._setMode(2)
            }),
            (a._activateNormalMode = function() {
              a._setMode(1)
            }),
            (a._handleInnerMeasure = function(e) {
              var t = a.props.onWidthChange
              t && t(e)
            }),
            (a._processCustoms = function(e) {
              var t = a.props.isFake,
                n = a.state.mode,
                o = a.context.tools
              return e.map(function(e) {
                return u.createElement(
                  i,
                  { className: m(1 !== n && j.hidden) },
                  u.createElement(o.Custom, c.a({}, e, { isFake: t })),
                )
              })
            }),
            (a.state = { mode: 1 }),
            a
          )
        }
        return (
          c.c(t, e),
          (t.prototype.render = function() {
            var e,
              t = this.context.tools,
              n = this.props,
              s = n.features,
              l = n.displayMode,
              c = n.chartSaver,
              d = n.studyMarket,
              h = n.readOnly,
              p = n.templateSyncEmitter,
              f = n.saveLoadSyncEmitter,
              v = n.leftCustomButtons,
              y = n.rightCustomButtons,
              b = n.showScrollbarWhen,
              S = n.width,
              E = void 0 === S ? 0 : S,
              _ = n.isFake,
              g = void 0 !== _ && _,
              w = this.state.mode,
              C = this._processCustoms(v),
              M = this._processCustoms(y),
              W = b.includes(l)
            return u.createElement(
              'div',
              { className: m(j.inner, ((e = {}), (e[j.fake] = g), e)) },
              u.createElement(
                P,
                {
                  isVisibleFade: Modernizr.touch && W,
                  isVisibleButtons: !Modernizr.touch && W,
                  isVisibleScrollbar: !1,
                  shouldMeasure: W && !g,
                },
                u.createElement(
                  R,
                  { onWidthChange: this._handleInnerMeasure },
                  !h &&
                    u.Children.toArray(
                      [
                        t.SymbolSearch &&
                          u.createElement(
                            i,
                            { key: 'symbol', className: 2 === w && j.symbolSearch },
                            u.createElement(t.SymbolSearch, {
                              id: g ? void 0 : H.SymbolSearch,
                              isActionsVisible: s.allowSymbolSearchSpread,
                              isExpanded: 2 === w,
                              onFocus: this._activateSymbolSearchMode,
                              onBlur: this._activateNormalMode,
                              maxWidth: E,
                            }),
                          ),
                        t.DateRange &&
                          u.createElement(i, { key: 'range' }, u.createElement(t.DateRange, null)),
                        t.Intervals &&
                          1 === w &&
                          u.createElement(
                            i,
                            { key: 'intervals' },
                            u.createElement(t.Intervals, {
                              id: g ? void 0 : H.Intervals,
                              isShownQuicks: s.allowFavoriting,
                              isFavoritingAllowed: s.allowFavoriting,
                              displayMode: l,
                              isFake: g,
                            }),
                          ),
                        t.Bars &&
                          1 === w &&
                          u.createElement(
                            i,
                            { key: 'styles' },
                            u.createElement(t.Bars, {
                              id: g ? void 0 : H.ChartStyles,
                              isShownQuicks: s.allowFavoriting,
                              isFavoritingAllowed: s.allowFavoriting,
                              displayMode: l,
                              isFake: g,
                            }),
                          ),
                        t.Compare &&
                          1 === w &&
                          u.createElement(
                            i,
                            { key: 'compare' },
                            u.createElement(t.Compare, {
                              id: g ? void 0 : H.Compare,
                              className: j.button,
                              displayMode: l,
                            }),
                          ),
                        1 === w &&
                          (t.Compare || t.Indicators) &&
                          u.createElement(
                            i,
                            { key: 'study' },
                            u.createElement(
                              'div',
                              { className: j.subGroup },
                              t.Indicators &&
                                u.createElement(t.Indicators, {
                                  id: g ? void 0 : H.Indicators,
                                  className: j.button,
                                  studyMarket: d,
                                  displayMode: l,
                                }),
                              t.Templates &&
                                u.createElement(t.Templates, {
                                  id: g ? void 0 : H.StudyTemplates,
                                  isShownQuicks: s.allowFavoriting,
                                  isFavoritingAllowed: s.allowFavoriting,
                                  displayMode: l,
                                  stateSyncEmitter: p,
                                  isFake: g,
                                }),
                            ),
                          ),
                        1 === w &&
                          t.Alert &&
                          u.createElement(
                            i,
                            { key: 'alert' },
                            u.createElement(t.Alert, {
                              id: g ? void 0 : H.Alerts,
                              className: j.button,
                              displayMode: l,
                            }),
                          ),
                        1 === w &&
                          t.AlertReferral &&
                          u.createElement(
                            i,
                            { key: 'alert-referral' },
                            u.createElement(t.AlertReferral, {
                              className: j.button,
                              displayMode: l,
                            }),
                          ),
                        t.Replay &&
                          1 === w &&
                          u.createElement(
                            i,
                            { key: 'replay' },
                            u.createElement(t.Replay, { className: j.button, displayMode: l }),
                          ),
                        t.UndoRedo &&
                          1 === w &&
                          u.createElement(
                            i,
                            { key: 'undo-redo' },
                            u.createElement(t.UndoRedo, { id: g ? void 0 : H.UndoRedo }),
                          ),
                        t.ScalePercentage &&
                          u.createElement(
                            i,
                            { key: 'percentage' },
                            u.createElement(t.ScalePercentage, null),
                          ),
                        t.ScaleLogarithm &&
                          u.createElement(
                            i,
                            { key: 'logarithm' },
                            u.createElement(t.ScaleLogarithm, null),
                          ),
                      ].concat(C),
                    ),
                  1 === w
                    ? r(
                        u.Children.toArray(
                          [
                            h &&
                              u.createElement(
                                i,
                                { key: 'view-only-badge' },
                                u.createElement(o, null),
                              ),
                            u.createElement(i, { key: 'gap', className: m(j.fill) }),
                            !h &&
                              t.Layout &&
                              u.createElement(
                                i,
                                { key: 'layout' },
                                u.createElement(t.Layout, { id: g ? void 0 : H.Layouts }),
                              ),
                            t.SaveLoad &&
                              !(h && z) &&
                              u.createElement(
                                i,
                                { key: 'save-load-right' },
                                u.createElement(t.SaveLoad, {
                                  id: g ? void 0 : H.SaveLoad,
                                  chartSaver: c,
                                  isReadOnly: h,
                                  displayMode: l,
                                  isFake: g,
                                  stateSyncEmitter: f,
                                }),
                              ),
                            t.SaveLoadReferral &&
                              u.createElement(
                                i,
                                { key: 'save-load-referral' },
                                u.createElement(t.SaveLoadReferral, {
                                  isReadOnly: h,
                                  displayMode: l,
                                }),
                              ),
                            s.showLaunchInPopupButton &&
                              t.OpenPopup &&
                              u.createElement(
                                i,
                                { key: 'popup' },
                                u.createElement(t.OpenPopup, {
                                  className: m(j.iconButton, j.popupButton),
                                }),
                              ),
                            t.Screenshot &&
                              s.accentScreenshotButton &&
                              u.createElement(
                                i,
                                { key: 'blue-screenshot' },
                                u.createElement(t.Screenshot, {
                                  color: 'blue',
                                  className: j.iconButton,
                                }),
                              ),
                            !h &&
                              t.Properties &&
                              u.createElement(
                                i,
                                { key: 'properties' },
                                u.createElement(t.Properties, {
                                  id: g ? void 0 : H.Properties,
                                  className: j.iconButton,
                                }),
                              ),
                            !h &&
                              t.Fullscreen &&
                              u.createElement(
                                i,
                                { key: 'fullscreen' },
                                u.createElement(t.Fullscreen, null),
                              ),
                            t.Screenshot &&
                              !s.accentScreenshotButton &&
                              u.createElement(
                                i,
                                { key: 'screenshot' },
                                u.createElement(t.Screenshot, { className: j.iconButton }),
                              ),
                          ].concat(M),
                        ),
                      )
                    : [
                        u.createElement(i, {
                          key: 'gap',
                          className: m(j.fill, 2 === w && j.minimalPriority),
                        }),
                        u.createElement(
                          i,
                          { key: 'symbol-search-close' },
                          u.createElement(a, { className: j.iconButton }),
                        ),
                      ],
                ),
              ),
            )
          }),
          (t.prototype._setMode = function(e) {
            this.setState({ mode: e })
          }),
          (t.contextTypes = { tools: h.object.isRequired }),
          t
        )
      })(u.PureComponent)),
      (Y = n(16)),
      (U = n.n(Y)),
      (K = n(199)),
      (J = (function(e) {
        function t(t, n, i) {
          return (
            void 0 === i && (i = []),
            e.call(this, t, n, 'FAVORITE_CHART_STYLES_CHANGED', 'StyleWidget.quicks', i) || this
          )
        }
        return c.c(t, e), t
      })(K.b)),
      (Q = n(61)),
      (q = n(204)),
      (X = n.n(q)),
      (Z = (function(e) {
        function t(t, n, i) {
          return (
            e.call(this, t, n, 'FAVORITE_INTERVALS_CHANGED', 'IntervalWidget.quicks', i) || this
          )
        }
        return (
          c.c(t, e),
          (t.prototype._serialize = function(e) {
            return X()(e.map(Q.normalizeIntervalString))
          }),
          (t.prototype._deserialize = function(e) {
            return X()(
              Object(Q.convertResolutionsFromSettings)(e)
                .filter(Q.isResolutionMultiplierValid)
                .map(Q.normalizeIntervalString),
            )
          }),
          t
        )
      })(K.a)),
      (ee = n(852)),
      (te = n(324)),
      (ne = n(844)),
      (ie = n(107)),
      (ae = n(49)),
      (oe = n(198)),
      (re = n(1091)),
      n.d(t, 'HeaderToolbar', function() {
        return ue
      }),
      (se = {
        Area: S.STYLE_AREA,
        Bars: S.STYLE_BARS,
        Candles: S.STYLE_CANDLES,
        'Heiken Ashi': S.STYLE_HEIKEN_ASHI,
        'Hollow Candles': S.STYLE_HOLLOW_CANDLES,
        Line: S.STYLE_LINE,
      }),
      (le = ['1', '30', '60']),
      (ce = []),
      (de = ['full', 'medium']),
      (ue = (function(e) {
        function t(t) {
          var n,
            i,
            a,
            o,
            r = e.call(this, t) || this
          return (
            (r._templateSyncEmitter = new v.a()),
            (r._saveLoadSyncEmitter = new v.a()),
            (r._handleFullWidthChange = function(e) {
              ;(r._fullWidth = e), r.setState({ measureValid: !1 })
            }),
            (r._handleFavoritesWidthChange = function(e) {
              ;(r._favoritesWidth = e), r.setState({ measureValid: !1 })
            }),
            (r._handleCollapseWidthChange = function(e) {
              ;(r._collapseWidth = e), r.setState({ measureValid: !1 })
            }),
            (r._handleMeasure = function(e) {
              var t = e.width
              r.setState({ availableWidth: t, measureValid: !1 })
            }),
            (r._handleEsc = function() {
              Object(ne.b)()
            }),
            (r._showScrollbarWhen = t.allowedModes.slice(-1)),
            (n = t.chartWidgetCollection),
            (i = t.chartChangesWatcher),
            (r._chartChangesWatcher = i),
            (a = s(r.props.defaultFavoriteStyles)),
            (r._favoriteChartStylesService = new J(ie.TVXWindowEvents, ae, a)),
            (o = l(r.props.defaultFavoriteIntervals)),
            (r._favoriteIntervalsService = new Z(ie.TVXWindowEvents, ae, o)),
            (r.state = {
              isVisible: !0,
              availableWidth: 0,
              displayMode: 'full',
              measureValid: !1,
              leftCustomButtons: [],
              rightCustomButtons: [],
            }),
            (r._readOnly = n.readOnly()),
            (r._features = {
              accentScreenshotButton: !!r.props.accentScreenshot,
              allowFavoriting: y.enabled('items_favoriting'),
              showIdeasButton: !!r.props.ideas,
              showLaunchInPopupButton: !!r.props.popupButton,
              allowSymbolSearchSpread:
                y.enabled('header_symbol_search') && !y.enabled('charting_library_base'),
              allowToolbarHiding: y.enabled('collapsible_header'),
            }),
            (r._setDisplayMode = g()(r._setDisplayMode, 100)),
            r._negotiateResizer(),
            r
          )
        }
        return (
          c.c(t, e),
          (t.prototype.getChildContext = function() {
            var e = this.props,
              t = e.tools,
              n = e.windowMessageService,
              i = e.chartWidgetCollection,
              a = e.chartApiInstance,
              o = e.availableTimeFrames
            return {
              tools: t,
              isFundamental: e.isFundamental,
              chartWidgetCollection: i,
              windowMessageService: n,
              chartApiInstance: a,
              availableTimeFrames: o,
              favoriteStudyTemplatesService: e.favoriteStudyTemplatesService,
              studyTemplates: e.studyTemplates,
              saveChartService: e.saveChartService,
              loadChartService: e.loadChartService,
              favoriteChartStylesService: this._favoriteChartStylesService,
              favoriteIntervalsService: this._favoriteIntervalsService,
              customIntervalsService: this._customIntervalsService,
              chartChangesWatcher: this._chartChangesWatcher,
              chartWidget: i.activeChartWidget.value(),
            }
          }),
          (t.prototype.componentDidUpdate = function(e, t) {
            var n = this.state,
              i = n.isVisible,
              a = n.measureValid
            i !== t.isVisible && (b.emit('toggle_header', i), this._negotiateResizer()),
              a || this._setDisplayMode()
          }),
          (t.prototype.render = function() {
            var e,
              t = this.props,
              n = (t.resizerBridge, t.allowedModes),
              i = c.e(t, ['resizerBridge', 'allowedModes']),
              a = this.state,
              o = a.displayMode,
              r = a.availableWidth,
              s = a.isVisible,
              l = a.leftCustomButtons,
              d = a.rightCustomButtons,
              h = c.a(
                {
                  features: this._features,
                  readOnly: this._readOnly,
                  isFake: !1,
                  templateSyncEmitter: this._templateSyncEmitter,
                  saveLoadSyncEmitter: this._saveLoadSyncEmitter,
                  width: r,
                  leftCustomButtons: l,
                  rightCustomButtons: d,
                },
                i,
              ),
              f = c.a({}, h, { isFake: !0, showScrollbarWhen: ce })
            return u.createElement(
              'div',
              { className: m(re.toolbar, ((e = {}), (e[re.isHidden] = !s), e)) },
              u.createElement(
                'div',
                { className: re.overflowWrap },
                u.createElement(
                  p,
                  { onMeasure: this._handleMeasure, whitelist: ['width'] },
                  u.createElement(
                    G,
                    c.a({ showScrollbarWhen: this._showScrollbarWhen, displayMode: o }, h),
                  ),
                ),
                n.includes('full') &&
                  u.createElement(
                    G,
                    c.a({ displayMode: 'full', onWidthChange: this._handleFullWidthChange }, f),
                  ),
                n.includes('medium') &&
                  u.createElement(
                    G,
                    c.a(
                      { displayMode: 'medium', onWidthChange: this._handleFavoritesWidthChange },
                      f,
                    ),
                  ),
                n.includes('small') &&
                  u.createElement(
                    G,
                    c.a(
                      { displayMode: 'small', onWidthChange: this._handleCollapseWidthChange },
                      f,
                    ),
                  ),
              ),
              u.createElement(ee.a, { keyCode: te.a.Escape, handler: this._handleEsc }),
            )
          }),
          (t.prototype.addButton = function(e) {
            var t, n, i, a, o, r
            return (
              void 0 === e && (e = 'left'),
              (t = new U.a(0)),
              (n = $('<div class="apply-common-tooltip ' + re.customButton + '">')[0]),
              (i = { key: +new Date(), element: n, width: t }),
              (a = this.state),
              (o = a.leftCustomButtons),
              (r = a.rightCustomButtons),
              'left' === e
                ? this.setState({ leftCustomButtons: o.concat([i]) })
                : this.setState({ rightCustomButtons: r.concat([i]) }),
              n
            )
          }),
          (t.prototype._negotiateResizer = function() {
            this.props.resizerBridge.negotiateHeight(
              this.state.isVisible
                ? oe.HEADER_TOOLBAR_HEIGHT_EXPANDED
                : oe.HEADER_TOOLBAR_HEIGHT_COLLAPSED,
            )
          }),
          (t.prototype._setDisplayMode = function() {
            var e,
              t,
              n = this.state.availableWidth,
              i = this.props.allowedModes,
              a =
                ((e = {}),
                (e.full = this._fullWidth),
                (e.medium = this._favoritesWidth),
                (e.small = this._collapseWidth),
                e),
              o = i.map(function(e) {
                return a[e]
              }),
              r = o.findIndex(function(e) {
                return n >= e
              })
            ;-1 === r && (r = i.length - 1),
              (t = i[r]),
              this.setState({ measureValid: !0, displayMode: t })
          }),
          (t.childContextTypes = {
            tools: h.object.isRequired,
            isFundamental: h.bool,
            chartApiInstance: h.object,
            availableTimeFrames: h.func,
            chartWidgetCollection: h.object,
            windowMessageService: h.object,
            favoriteChartStylesService: h.object,
            favoriteIntervalsService: h.object,
            customIntervalsService: h.object,
            favoriteStudyTemplatesService: h.object,
            studyTemplates: h.object,
            chartChangesWatcher: h.object,
            saveChartService: h.object,
            loadChartService: h.object,
            chartWidget: h.object,
          }),
          (t.defaultProps = { allowedModes: de }),
          t
        )
      })(u.PureComponent))
  },
  844: function(e, t, n) {
    'use strict'
    function i() {
      p.fire()
    }
    var a, o, r, s, l, c, d, u, h, p
    n.d(t, 'a', function() {
      return h
    }),
      (t.b = i),
      (a = n(1)),
      (o = n(20)),
      n.n(o),
      (r = n(102)),
      n.n(r),
      (s = n(7)),
      n.n(s),
      (l = n(50)),
      (c = n(871)),
      n.n(c),
      (d = n(8)),
      (u = n.n(d)),
      (h = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this
          return (
            (n._containerRef = null),
            (n._scrollWrapRef = null),
            (n._handleContainerRef = function(e) {
              return (n._containerRef = e)
            }),
            (n._handleScrollWrapRef = function(e) {
              return (n._scrollWrapRef = e)
            }),
            (n._handleMeasure = function() {
              var e, t, i, a, o, r, c, d, u, h, p, m, f, v, y, b, S
              n.state.isMeasureValid ||
                ((e = n.props.position),
                (t = Object(s.ensureNotNull)(n._containerRef)),
                (i = t.getBoundingClientRect()),
                (a = document.documentElement.clientHeight),
                (o = document.documentElement.clientWidth),
                (r = a - 10),
                (c = i.height > r),
                c &&
                  ((d = Object(s.ensureNotNull)(n._scrollWrapRef)),
                  (d.style.overflowY = 'scroll'),
                  (i = t.getBoundingClientRect())),
                (u = i.width),
                (h = i.height),
                (p = 'function' == typeof e ? e(u, h) : e),
                (m = 5),
                (f = o - u - 5),
                (v = Object(l.clamp)(p.x, m, Math.max(m, f))),
                (y = 5),
                (b = a - h - 5),
                (S = Object(l.clamp)(p.y, y, Math.max(y, b))),
                n.setState({
                  appearingMenuHeight: c ? r : void 0,
                  appearingMenuWidth: p.overrideWidth,
                  appearingPosition: { x: v, y: S },
                  isMeasureValid: !0,
                }))
            }),
            (n._handleGlobalClose = function() {
              n.props.onClose()
            }),
            (n.state = {}),
            n
          )
        }
        return (
          a.c(t, e),
          (t.prototype.componentWillReceiveProps = function(e) {
            this.props.isOpened && !e.isOpened && this.setState({ isMeasureValid: void 0 })
          }),
          (t.prototype.componentDidMount = function() {
            this._handleMeasure(), p.subscribe(this, this._handleGlobalClose)
          }),
          (t.prototype.componentDidUpdate = function() {
            this._handleMeasure()
          }),
          (t.prototype.componentWillUnmount = function() {
            p.unsubscribe(this, this._handleGlobalClose)
          }),
          (t.prototype.render = function() {
            var e,
              t = this.props,
              n = t.children,
              i = t.minWidth,
              a = t.theme,
              s = void 0 === a ? c : a,
              l = t.className,
              d = this.state,
              u = d.appearingMenuHeight,
              h = d.appearingMenuWidth,
              p = d.appearingPosition,
              m = d.isMeasureValid
            return o.createElement(
              'div',
              {
                className: r(l, s.menuWrap, ((e = {}), (e[s.isMeasuring] = !m), e)),
                style: {
                  height: u,
                  left: p && p.x,
                  minWidth: i,
                  position: 'fixed',
                  top: p && p.y,
                  width: h,
                },
                ref: this._handleContainerRef,
              },
              o.createElement(
                'div',
                {
                  className: s.scrollWrap,
                  style: { overflowY: void 0 !== u ? 'scroll' : 'auto' },
                  ref: this._handleScrollWrapRef,
                },
                o.createElement('div', { className: s.menuBox }, n),
              ),
            )
          }),
          t
        )
      })(o.PureComponent)),
      (p = new u.a())
  },
  848: function(e, t, n) {
    'use strict'
    function i(e) {
      var t,
        n = e.icon,
        i = e.isActive,
        c = e.isOpened,
        d = e.isDisabled,
        u = e.onClick,
        h = e.text,
        p = e.textBeforeIcon,
        m = e.title,
        f = e.theme,
        v = void 0 === f ? l : f,
        y = e.className,
        b = e.forceInteractive,
        S = a.e(e, [
          'icon',
          'isActive',
          'isOpened',
          'isDisabled',
          'onClick',
          'text',
          'textBeforeIcon',
          'title',
          'theme',
          'className',
          'forceInteractive',
        ]),
        E = r(
          y,
          v.button,
          m && 'apply-common-tooltip',
          ((t = {}),
          (t[v.isActive] = i),
          (t[v.isOpened] = c),
          (t[v.isInteractive] = (b || !!u) && !d),
          (t[v.isDisabled] = d),
          t),
        ),
        _ =
          n &&
          ('string' == typeof n
            ? o.createElement(s.a, { className: v.icon, icon: n })
            : o.cloneElement(n, { className: v.icon }))
      return o.createElement(
        'div',
        a.a({}, S, {
          className: E,
          onClick: d ? void 0 : u,
          title: m,
        }),
        p && h && o.createElement('div', { className: r('js-button-text', v.text) }, h),
        _,
        !p && h && o.createElement('div', { className: r('js-button-text', v.text) }, h),
      )
    }
    var a, o, r, s, l
    ;(t.a = i),
      (a = n(1)),
      (o = n(20)),
      n.n(o),
      (r = n(102)),
      n.n(r),
      (s = n(300)),
      (l = n(855)),
      n.n(l)
  },
  852: function(e, t, n) {
    'use strict'
    var i, a, o
    n.d(t, 'a', function() {
      return o
    }),
      (i = n(1)),
      (a = n(20)),
      n.n(a),
      (o = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._handleKeyDown = function(e) {
              e.keyCode === t.props.keyCode && t.props.handler(e)
            }),
            t
          )
        }
        return (
          i.c(t, e),
          (t.prototype.componentDidMount = function() {
            document.addEventListener('keydown', this._handleKeyDown, !1)
          }),
          (t.prototype.componentWillUnmount = function() {
            document.removeEventListener('keydown', this._handleKeyDown, !1)
          }),
          (t.prototype.render = function() {
            return null
          }),
          t
        )
      })(a.PureComponent))
  },
  855: function(e, t) {
    e.exports = {
      button: 'button-2ioYhFEY-',
      isInteractive: 'isInteractive-20uLObIc-',
      hovered: 'hovered-3perbaxJ-',
      isActive: 'isActive-22S-lGpa-',
      isOpened: 'isOpened-p-Ume5l9-',
      isDisabled: 'isDisabled-1_tmrLfP-',
      text: 'text-1sK7vbvh-',
      icon: 'icon-beK_KS0k-',
    }
  },
  871: function(e, t) {
    e.exports = {
      menuWrap: 'menuWrap-1gEtmoET-',
      isMeasuring: 'isMeasuring-FZ0EJCM2-',
      scrollWrap: 'scrollWrap-1B5MfTJt-',
      menuBox: 'menuBox-20sJGjtG-',
      isHidden: 'isHidden-2vLQpR1t-',
    }
  },
  885: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g><path fill-rule="nonzero" d="M4.034 14.18l-.07-.18.07-.18c1.535-3.975 5.645-6.82 9.966-6.82 4.32 0 8.431 2.845 9.966 6.82l.07.18-.07.18c-1.535 3.975-5.646 6.82-9.966 6.82-4.321 0-8.431-2.845-9.966-6.82zm9.966 5.82c3.84 0 7.521-2.503 8.962-6-1.441-3.497-5.122-6-8.962-6-3.841 0-7.521 2.503-8.962 6 1.441 3.497 5.121 6 8.962 6z"/><path d="M11 14.001c0 1.66 1.341 2.999 3.001 2.999s2.999-1.339 2.999-2.999c0-1.66-1.339-3.001-2.999-3.001-1.66 0-3.001 1.341-3.001 3.001z"/></g></svg>'
  },
  990: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'
  },
})
