webpackJsonp([4], {
  1020: function(e, t, n) {
    'use strict'
    function o(e) {
      var t,
        n = e.className,
        o = e.color,
        i = void 0 === o ? 'black' : o,
        r = d(h.item, ((t = {}), (t[h[i]] = !!i), t))
      return l.createElement(
        u.CSSTransitionGroup,
        {
          transitionName: 'loader',
          transitionAppear: !0,
          transitionAppearTimeout: 2 * m.dur,
          transitionEnter: !1,
          transitionLeave: !1,
        },
        l.createElement(
          'span',
          { className: d(h.loader, n) },
          l.createElement('span', { className: r }),
          l.createElement('span', { className: r }),
          l.createElement('span', { className: r }),
        ),
      )
    }
    function i(e) {
      switch (e) {
        case 'default':
          return p.base
        case 'primary':
          return p.primary
        case 'secondary':
          return p.secondary
        case 'secondary-script':
          return p.secondaryScript
        case 'success':
          return p.success
        case 'warning':
          return p.warning
        case 'danger':
          return p.danger
        case 'link':
          return p.link
        default:
          return ''
      }
    }
    function r(e) {
      switch (e) {
        case 'xsmall':
          return p.xsmall
        case 'small':
          return p.small
        case 'large':
          return p.large
        default:
          return ''
      }
    }
    function a(e) {
      switch (e) {
        case 'ghost':
          return p.ghost
        default:
          return ''
      }
    }
    function s(e) {
      var t,
        n,
        s = e.active,
        h = void 0 === s || s,
        f = e.children,
        v = e.className,
        g = void 0 === v ? '' : v,
        y = e.disabled,
        w = void 0 !== y && y,
        _ = e.grouped,
        b = void 0 !== _ && _,
        E = e.growable,
        C = void 0 !== E && E,
        x = e.id,
        k = void 0 === x ? 0 : x,
        W = e.onClick,
        O = e.reference,
        N = e.size,
        L = e.theme,
        I = e.type,
        U = void 0 === I ? 'default' : I,
        S = e.loading,
        T = void 0 !== S && S,
        D = e.withPadding,
        P = void 0 === D || D,
        z = e.title,
        j = void 0 === z ? '' : z,
        M = e.disabledClassName,
        A = e.tabIndex,
        V = void 0 === A ? 0 : A,
        B = e.component,
        F = void 0 === B ? 'button' : B,
        R = e.target,
        Z = void 0 === R ? '' : R,
        K = e.href,
        G = void 0 === K ? '' : K,
        H = e.rounded,
        Q = void 0 !== H && H,
        X = d(
          ((t = {}),
          (t[g] = !!g),
          (t[p.button] = !0),
          (t[p.active] = h && !w),
          (t[M || p.disabled] = w),
          (t[p.grouped] = b),
          (t[p.growable] = C),
          (t[p.withPadding] = P),
          (t[r(N)] = !!N),
          (t[a(L)] = !!L),
          (t[i(U)] = !0),
          (t[p.rounded] = Q),
          t),
        ),
        q = 'default' === U ? 'black' : 'white',
        J = l.createElement('span', { key: '1', className: p.text }, f)
      return (
        T &&
          (J = l.createElement(
            'span',
            { key: '2', className: p.loader },
            l.createElement(o, { color: q }),
          )),
        (n = { disabled: w, title: j, target: Z, href: G }),
        l.createElement(
          u.CSSTransitionGroup,
          c.a(
            {
              component: F,
              tabIndex: V,
              transitionEnterTimeout: m.dur,
              transitionLeaveTimeout: m.dur,
              transitionName: 'body',
              className: X,
              key: k,
              onClick: T ? void 0 : W,
              ref: O,
            },
            n,
          ),
          l.createElement('span', { className: p.hiddenText }, f),
          J,
        )
      )
    }
    var c = n(1),
      l = n(20),
      d = n(102),
      p = n(1021),
      u = n(302),
      m = n(184),
      h = n(1022)
    t.a = s
  },
  1021: function(e, t) {
    e.exports = {
      ghost: 'ghost-3yO24wIn-',
      primary: 'primary-1rSzOFdX-',
      success: 'success-1qQ3_tEI-',
      danger: 'danger-jKTO4wDd-',
      warning: 'warning-2uDfz7Zc-',
      secondary: 'secondary-3ll81brZ-',
      button: 'button-2O-nMUcz-',
      withPadding: 'withPadding-_5CJoO5q-',
      hiddenText: 'hiddenText-3qcN5Wif-',
      text: 'text-2KOWx3rB-',
      loader: 'loader-1CC-1F8J-',
      base: 'base-2d4XFcnI-',
      secondaryScript: 'secondaryScript-2iIeFIWW-',
      link: 'link-2sR0CShp-',
      xsmall: 'xsmall-1aiWe3Hs-',
      rounded: 'rounded-3qEdyiAz-',
      small: 'small-2-nQtW8O-',
      large: 'large-33HYhX8D-',
      grouped: 'grouped-1WsMjajI-',
      growable: 'growable-F6tv8R_j-',
      active: 'active-2UxWxOgk-',
      disabled: 'disabled-3u0ULovv-',
    }
  },
  1022: function(e, t) {
    e.exports = {
      loader: 'loader-3Pj8ExOX-',
      item: 'item-2n55_7om-',
      'tv-button-loader': 'tv-button-loader-SKpJjjYw-',
      black: 'black-eFIQWyf4-',
      white: 'white-2Ma0ajvT-',
      gray: 'gray-24fvVR0S-',
    }
  },
  1205: function(e, t) {
    e.exports = {
      modal: 'modal-3St4C-sr-',
      backdrop: 'backdrop-37dtOKR8-',
      animated: 'animated-3MXxj0QT-',
      notAnimated: 'notAnimated-2Wxm0Nli-',
    }
  },
  1206: function(e, t) {
    e.exports = {
      modal: 'modal-C2LSTwhC-',
      content: 'content-tr28wPlV-',
      form: 'form-2GifjSKe-',
      copyForm: 'copyForm-1HuPoKA0-',
      copyBtn: 'copyBtn-1oB8tEqo-',
      shadow: 'shadow-2JTdO0Fb-',
      actions: 'actions-3fKk-h7d-',
      link: 'link-1alPBTTQ-',
      socials: 'socials-rht5Uvp--',
    }
  },
  1207: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 11.6" width="15px" height="11.6px"><path d="M15 1.4c-.3.1-1 .4-1.7.5.4-.2 1.1-1 1.3-1.6-.4.3-1.4.7-1.9.7-.6-.7-1.4-1-2.3-1-1.7 0-3.1 1.3-3.1 3 0 .2 0 .4.1.7C5.1 3.6 2.4 2.5.9.6 0 2.1.8 3.9 1.8 4.5c-.4 0-1 0-1.3-.3 0 1 .5 2.4 2.4 2.9-.4.2-1 .1-1.3.1.1.9 1.4 2 2.8 2-.6.5-2.3 1.4-4.4 1.1 1.4.8 3.1 1.3 4.8 1.3 5 0 8.8-3.9 8.6-8.6.5-.4 1.1-.9 1.6-1.6z"/></svg>'
  },
  1208: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" width="22" height="15"><g fill="none" fill-rule="evenodd" stroke-width="2"><path stroke="#757575" d="M6.25 5.812L11 10.087l4.75-4.275M11 9.868V.315"/><path stroke="#ADAEB0" d="M21 10v4H1v-4"/></g><path d="M.008 12.47V9.994H1.96v3.003h18.095V9.988l.958.021.957.021.02 2.46.02 2.458H.008v-2.477z"/><path d="M8.642 9.27a673.518 673.518 0 0 0-2.658-2.396l-.369-.325.657-.716.658-.716 1.49 1.35c.819.741 1.525 1.348 1.57 1.348.054 0 .079-1.143.079-3.716V.382H11.946v3.717c0 2.129.029 3.716.067 3.716.037 0 .738-.607 1.558-1.349l1.491-1.35.508.543c.28.298.57.626.647.73l.14.187-2.632 2.366c-1.447 1.3-2.668 2.372-2.712 2.381-.044.01-1.111-.915-2.37-2.054z"/></svg>'
  },
  137: function(e, t, n) {
    'use strict'
    function o(e, t, n, o) {
      return (
        void 0 === o && (o = {}),
        l.b(this, void 0, void 0, function() {
          var i, r, a, s, c, u, m, h, f, v, g
          return l.d(this, function(l) {
            switch (l.label) {
              case 0:
                if (((i = new FormData()), void 0 !== o.previews))
                  for (r = 0, a = o.previews; r < a.length; r++)
                    (s = a[r]), i.append('previews[]', s)
                void 0 !== o.cme && i.append('cme', o.cme + ''),
                  void 0 !== o.wl && i.append('wl', o.wl + ''),
                  void 0 !== o.onWidget && i.append('onWidget', o.onWidget + ''),
                  (c = window.urlParams),
                  c && c.locale && i.append('language', c.locale),
                  (u = e.activeChartWidget.value()),
                  (m = u.widgetCustomer()),
                  void 0 !== m && i.append('customer', m),
                  i.append('timezone', u.properties().timezone.value()),
                  i.append('images', JSON.stringify(e.images())),
                  (h = d.enabled('charting_library_base')
                    ? o.snapshotUrl || 'https://www.tradingview.com/snapshot/'
                    : '/snapshot/'),
                  (l.label = 1)
              case 1:
                return (
                  l.trys.push([1, 4, , 5]),
                  [4, Object(p.fetch)(h, { body: i, method: 'POST', credentials: 'same-origin' })]
                )
              case 2:
                return (f = l.sent()), f.ok ? [4, f.text()] : [2, n()]
              case 3:
                return (v = l.sent()), v ? t(v) : n(), [3, 5]
              case 4:
                return (g = l.sent()), n(), [3, 5]
              case 5:
                return [2]
            }
          })
        })
      )
    }
    function i(e) {
      var t = f('tv-spinner', 'tv-spinner--shown', 'tv-spinner--size_' + (e.size || S.DEFAULT_SIZE))
      return m.createElement(
        'div',
        { className: t, style: e.style, role: 'progressbar' },
        m.createElement(
          'div',
          { className: 'tv-spinner__spinner-layer' },
          m.createElement('div', { className: 'tv-spinner__background tv-spinner__width_element' }),
          m.createElement('div', {
            className:
              'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left',
          }),
          m.createElement('div', {
            className:
              'tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right',
          }),
        ),
      )
    }
    function r(e) {
      return window.location.protocol + '//' + window.location.host + '/x/' + e + '/'
    }
    function a(e, t, n) {
      function i(e) {
        a || ((a = document.createElement('div')), document.body.appendChild(a)),
          h.render(m.createElement(V, e), a)
      }
      function r() {
        i({ isOpened: !1 })
      }
      void 0 === t && (t = {}), Object(u.trackEvent)('GUI', 'Get image button')
      var a
      i({ isOpened: !1 }),
        o(
          e,
          function(o) {
            var a, s
            n && n(o),
              (a = ''),
              (a = d.enabled('charting_library_base')
                ? (t.snapshotUrl ? '' : 'https://www.tradingview.com/x/') + o
                : Object(c.isProd)()
                ? 'https://www.tradingview.com/x/' + o + '/'
                : window.location.protocol + '//' + window.location.host + '/x/' + o + '/'),
              (s = e.activeChartWidget
                .value()
                .symbolProperty()
                .value()),
              i({ isOpened: !0, onClose: r, imageUrl: a, symbol: s })
          },
          function() {
            i({ isOpened: !0, onClose: r, error: window.t('URL cannot be received') })
          },
          { onWidget: e.onWidget, snapshotUrl: t.snapshotUrl },
        ),
        i({ isOpened: !0, onClose: r })
    }
    function s(e, t, n) {
      o(
        e,
        function(e) {
          n && n(e)
        },
        function() {
          console.warn(window.t('Error while trying to create snapshot.'))
        },
        { snapshotUrl: t.snapshotUrl },
      )
    }
    var c,
      l,
      d,
      p,
      u,
      m,
      h,
      f,
      v,
      g,
      y,
      w,
      _,
      b,
      E,
      C,
      x,
      k,
      W,
      O,
      N,
      L,
      I,
      U,
      S,
      T,
      D,
      P,
      z,
      j,
      M,
      A,
      V
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n(11),
      (c = n(348)),
      (l = n(1)),
      (d = n(5)),
      (p = n(336)),
      (u = n(39)),
      (m = n(20)),
      (h = n(59)),
      (f = n(102)),
      (v = n(965)),
      (g = n(184)),
      (y = n(319)),
      (w = {
        enter: {
          opacity: function(e, t) {
            Object(y.lazyVelocity)().then(function() {
              $.Velocity.animate(
                e,
                { opacity: [0.5, 0] },
                { duration: 0.75 * g.dur, easing: 'ease-out-cubic', visibility: 'visible' },
              ).then(t)
            })
          },
        },
        leave: {
          opacity: function(e, t) {
            Object(y.lazyVelocity)().then(function() {
              $.Velocity.animate(
                e,
                { opacity: 0 },
                { duration: 0.5 * g.dur, easing: 'ease-in-cubic', visibility: 'hidden' },
              ).then(t)
            })
          },
        },
      }),
      (_ = {
        enter: {
          fromTop: function(e, t) {
            Object(y.lazyVelocity)().then(function() {
              $.Velocity.animate(
                e,
                { opacity: [1, 0], translateY: [0, -20] },
                { duration: 0.75 * g.dur, easing: 'ease-out-cubic', visibility: 'visible' },
              ).then(t)
            })
          },
        },
        leave: {
          fromTop: function(e, t) {
            Object(y.lazyVelocity)().then(function() {
              $.Velocity.animate(
                e,
                { opacity: [0], translateY: ['-20px', 0] },
                { duration: 0.5 * g.dur, easing: 'ease-in-cubic', visibility: 'hidden' },
              ).then(t)
            })
          },
        },
      }),
      (b = n(967)),
      (E = n(868)),
      (C = n(304)),
      (x = n(7)),
      (k = n(1205)),
      (W = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (
            (t._backdrop = null),
            (t._dialog = null),
            (t._setBackdropElem = function(e) {
              t._backdrop = e
            }),
            (t._setDialogElem = function(e) {
              t._dialog = e
            }),
            t
          )
        }
        return (
          l.c(t, e),
          (t.prototype.componentWillEnter = function(e) {
            var t, n
            this.props.animated &&
            this.props.backdropEnterAnimation &&
            this.props.dialogEnterAnimation
              ? ((t = w.enter[this.props.backdropEnterAnimation]),
                (n = _.enter[this.props.dialogEnterAnimation]),
                t && this._backdrop && t(this._backdrop),
                n && n(Object(x.ensureNotNull)(this._dialog), e))
              : e()
          }),
          (t.prototype.componentWillLeave = function(e) {
            var t, n
            this.props.animated &&
            this.props.backdropLeaveAnimation &&
            this.props.dialogLeaveAnimation
              ? ((t = w.leave[this.props.backdropLeaveAnimation]),
                (n = _.leave[this.props.dialogLeaveAnimation]),
                t && this._backdrop && t(this._backdrop),
                n && n(Object(x.ensureNotNull)(this._dialog), e))
              : e()
          }),
          (t.prototype.render = function() {
            var e,
              t,
              n = this.props,
              o = n.zIndex,
              i = n.animated,
              r = n.onClickOutside,
              a = n.children,
              s = n.className
            return m.createElement(
              'div',
              { className: k.modal, style: { zIndex: o } },
              m.createElement('div', {
                className: f(
                  k.backdrop,
                  ((e = {}), (e[k.animated] = i), (e[k.notAnimated] = !i), e),
                ),
                ref: this._setBackdropElem,
              }),
              m.createElement(
                C.a,
                { mouseDown: !0, touchStart: !0, handler: r },
                m.createElement(
                  v.a,
                  l.a({}, this.props, {
                    className: f(s, ((t = {}), (t[k.notAnimated] = !i), t)),
                    reference: this._setDialogElem,
                  }),
                  a,
                ),
              ),
            )
          }),
          (t.defaultProps = {
            backdropEnterAnimation: 'opacity',
            backdropLeaveAnimation: 'opacity',
            dialogEnterAnimation: 'fromTop',
            dialogLeaveAnimation: 'fromTop',
            animated: !0,
            width: 500,
          }),
          t
        )
      })(m.PureComponent)),
      (O = Object(b.a)(Object(E.a)(W))),
      (N = n(968)),
      (L = n(300)),
      (I = n(326)),
      (U = n(1020)),
      (S = n(305)),
      (T = n(333)),
      (function(e) {
        function t(e, t) {
          return 'cme' === TradingView.widgetCustomer
            ? t + ' from cmegroup.com via @tradingview $' + e
            : '#' + e + ' chart ' + t + ' via https://www.tradingview.com'
        }
        function n(e) {
          var t = i()
          return {
            onFailure: function() {
              t.close()
            },
            onSuccess: function(n) {
              t.location.href = a(e, n)
            },
          }
        }
        function o(e, t) {
          i(s(e, t))
        }
        function i(e, t) {
          var n, o, i, r
          return (
            void 0 === e && (e = 'about:blank'),
            void 0 === t && (t = 'snapshot_tweet'),
            (n = 550),
            (o = 420),
            (i = Math.round(screen.width / 2 - n / 2)),
            (r = Math.round(screen.height / 2 - o / 2)),
            window.open(
              e,
              t,
              'scrollbars=yes,resizable=yes,toolbar=no,location=yes,\n\t\t\t\twidth=' +
                n +
                ',height=' +
                o +
                ',\n\t\t\t\tleft=' +
                i +
                ',top=' +
                r,
            )
          )
        }
        function a(e, n) {
          return 'https://twitter.com/intent/tweet?&status=' + encodeURIComponent(t(e, r(n)))
        }
        function s(e, n) {
          return 'https://twitter.com/intent/tweet?&status=' + encodeURIComponent(t(e, n))
        }
        ;(e.getStatus = t), (e.shareSnapshot = n), (e.shareSnapshotInstantly = o)
      })(D || (D = {})),
      (P = n(852)),
      (z = n(38)),
      (j = n(1206)),
      (M = n(1207)),
      (A = n(1208)),
      (V = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this
          return (
            (n._input = null),
            (n._hideMessages = function() {
              n.setState({ message: '', error: '' })
            }),
            (n._setInput = function(e) {
              n._input = e
            }),
            (n._select = function() {
              null !== n._input && n._input.select()
            }),
            (n._shareTwitter = function() {
              D.shareSnapshotInstantly(n.props.symbol || '', n.props.imageUrl || '')
            }),
            (n._onClose = function() {
              n.props.onClose && n.props.onClose(), (n._copyBtn = null)
            }),
            (n.state = { message: t.message, error: t.error }),
            n
          )
        }
        return (
          l.c(t, e),
          (t.prototype.componentWillReceiveProps = function(e) {
            this.setState({ message: e.message, error: e.error })
          }),
          (t.prototype.componentDidUpdate = function(e) {
            var t = this
            !e.imageUrl &&
              this.props.imageUrl &&
              setTimeout(function() {
                null !== t._input && (t._input.select(), t._input.focus())
              })
          }),
          (t.prototype.render = function() {
            var e = this,
              t = !this.props.imageUrl && !this.props.message && !this.props.error,
              n = f(j.copyBtn, !z.IS_RTL && j.shadow)
            return m.createElement(
              O,
              {
                isOpened: this.props.isOpened,
                className: j.modal,
                onClickOutside: this._onClose,
                animated: !1,
              },
              m.createElement(N.b, { onClose: this._onClose }, window.t('Image URL')),
              m.createElement(N.c, {
                text: this.state.message,
                isError: !1,
                onClickOutside: this._hideMessages,
              }),
              m.createElement(N.c, {
                text: this.state.error,
                isError: !0,
                onClickOutside: this._hideMessages,
              }),
              m.createElement(
                N.a,
                null,
                m.createElement(P.a, { keyCode: 27, handler: this._onClose }),
                m.createElement(
                  'div',
                  {
                    className: j.content,
                  },
                  t && m.createElement(i, { size: 'mini' }),
                  m.createElement(
                    'div',
                    {
                      className: j.form,
                      style: { visibility: this.props.imageUrl ? 'visible' : 'hidden' },
                    },
                    m.createElement(
                      'div',
                      { className: j.copyForm },
                      m.createElement(I.b, {
                        reference: this._setInput,
                        readOnly: !0,
                        value: this.props.imageUrl || '',
                        onClick: this._select,
                        onFocus: this._select,
                        strictLeftDirectionInput: z.IS_RTL,
                        style: z.IS_RTL ? { paddingLeft: 84 } : void 0,
                      }),
                      m.createElement(
                        'div',
                        {
                          ref: function(t) {
                            return t && e._setupClipboard(t)
                          },
                          'data-clipboard-text': this.props.imageUrl,
                          className: n,
                        },
                        m.createElement(U.a, { type: 'primary', theme: 'ghost' }, window.t('Copy')),
                      ),
                    ),
                    m.createElement(
                      'div',
                      { className: j.actions },
                      m.createElement(
                        'a',
                        { className: j.link, href: this.props.imageUrl, target: '_blank' },
                        m.createElement(L.a, { icon: A }),
                        m.createElement('span', null, window.t('Save image')),
                      ),
                      m.createElement(
                        'span',
                        { className: j.socials, onClick: this._shareTwitter },
                        m.createElement(L.a, { icon: M }),
                        m.createElement('span', null, window.t('Tweet')),
                      ),
                    ),
                  ),
                ),
              ),
            )
          }),
          (t.prototype._setupClipboard = function(e) {
            var t = this
            this._copyBtn ||
              ((this._copyBtn = e),
              n
                .e(33)
                .then(
                  function(o) {
                    var i = n(1248),
                      r = new i(e)
                    r.on('success', function() {
                      TradingView.trackEvent('GUI', 'Copied Image Link'),
                        t.setState({ message: window.t('Copied to clipboard') })
                    }),
                      r.on('error', function() {
                        t.setState({
                          message: window.t(
                            "Sorry, the Copy Link button doesn't work in your browser. Please select the link and copy it manually.",
                          ),
                        })
                      })
                  }.bind(null, n),
                )
                .catch(n.oe))
          }),
          (t.defaultProps = { imageUrl: '' }),
          t
        )
      })(m.Component)),
      (t.getImageOfChart = a),
      (t.getImageOfChartSilently = s)
  },
  828: function(e, t) {
    e.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path d="M5.182 6.596l-3.889-3.889-.707-.707 1.414-1.414.707.707 3.889 3.889 3.889-3.889.707-.707 1.414 1.414-.707.707-3.889 3.889 3.889 3.889.707.707-1.414 1.414-.707-.707-3.889-3.889-3.889 3.889-.707.707-1.414-1.414.707-.707 3.889-3.889z"/></svg>'
  },
  852: function(e, t, n) {
    'use strict'
    var o, i, r
    n.d(t, 'a', function() {
      return r
    }),
      (o = n(1)),
      (i = n(20)),
      n.n(i),
      (r = (function(e) {
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
          o.c(t, e),
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
      })(i.PureComponent))
  },
  868: function(e, t, n) {
    'use strict'
    function o(e) {
      var t
      return (
        (t = (function(t) {
          function n(e, n) {
            var o = t.call(this, e, n) || this
            return (
              (o._getWrappedComponent = function(e) {
                o._instance = e
              }),
              o
            )
          }
          return (
            i.c(n, t),
            (n.prototype.componentDidMount = function() {
              this._instance.componentWillEnter &&
                this.context.lifecycleProvider.registerWillEnterCb(
                  this._instance.componentWillEnter.bind(this._instance),
                ),
                this._instance.componentDidEnter &&
                  this.context.lifecycleProvider.registerDidEnterCb(
                    this._instance.componentDidEnter.bind(this._instance),
                  ),
                this._instance.componentWillLeave &&
                  this.context.lifecycleProvider.registerWillLeaveCb(
                    this._instance.componentWillLeave.bind(this._instance),
                  ),
                this._instance.componentDidLeave &&
                  this.context.lifecycleProvider.registerDidLeaveCb(
                    this._instance.componentDidLeave.bind(this._instance),
                  )
            }),
            (n.prototype.render = function() {
              return r.createElement(
                e,
                i.a({}, this.props, { ref: this._getWrappedComponent }),
                this.props.children,
              )
            }),
            n
          )
        })(r.PureComponent)),
        (t.displayName = 'Lifecycle Consumer'),
        (t.contextTypes = { lifecycleProvider: a.object }),
        t
      )
    }
    var i, r, a
    ;(t.a = o), (i = n(1)), (r = n(20)), n.n(r), (a = n(104)), n.n(a), r.PureComponent
  },
  965: function(e, t, n) {
    'use strict'
    function o(e) {
      var t,
        n = e.rounded,
        o = void 0 === n || n,
        s = e.shadowed,
        c = void 0 === s || s,
        l = e.fullscreen,
        d = void 0 !== l && l,
        p = e.className,
        u = void 0 === p ? '' : p,
        m = a(
          r.dialog,
          ((t = {}),
          (t[u] = !!u),
          (t[r.rounded] = o),
          (t[r.shadowed] = c),
          (t[r.fullscreen] = d),
          (t[r.animated] = r.animated),
          t),
        ),
        h = {
          bottom: e.bottom,
          left: e.left,
          maxWidth: e.width,
          right: e.right,
          top: e.top,
          zIndex: e.zIndex,
        }
      return i.createElement(
        'div',
        {
          className: m,
          ref: e.reference,
          style: h,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onClick: e.onClick,
          onKeyDown: e.onKeyDown,
          tabIndex: -1,
        },
        e.children,
      )
    }
    var i, r, a
    ;(t.a = o), (i = n(20)), n.n(i), (r = n(966)), n.n(r), (a = n(102)), n.n(a)
  },
  966: function(e, t) {
    e.exports = {
      dialog: 'dialog-37P3XYj--',
      rounded: 'rounded-2hsCfk1q-',
      shadowed: 'shadowed-1iGQR9Xl-',
      fullscreen: 'fullscreen-1I0OIOcc-',
    }
  },
  967: function(e, t, n) {
    'use strict'
    function o() {
      ;(c = document.createElement('div')), document.body.appendChild(c), i()
    }
    function i(e) {
      v.render(
        h.createElement(f.TransitionGroup, { component: 'div' }, Array.from(C.values())),
        c,
        e,
      )
    }
    function r(e) {
      var t
      return (
        (t = (function(t) {
          function n(e) {
            var n = t.call(this, e) || this
            return (
              (n._registerWillEnterCb = function(e) {
                n._willEnter.push(e)
              }),
              (n._registerDidEnterCb = function(e) {
                n._didEnter.push(e)
              }),
              (n._registerWillLeaveCb = function(e) {
                n._willLeave.push(e)
              }),
              (n._registerDidLeaveCb = function(e) {
                n._didLeave.push(e)
              }),
              (n._willEnter = []),
              (n._didEnter = []),
              (n._willLeave = []),
              (n._didLeave = []),
              n
            )
          }
          return (
            m.c(n, t),
            (n.prototype.getChildContext = function() {
              return {
                lifecycleProvider: {
                  registerWillEnterCb: this._registerWillEnterCb,
                  registerDidEnterCb: this._registerDidEnterCb,
                  registerWillLeaveCb: this._registerWillLeaveCb,
                  registerDidLeaveCb: this._registerDidLeaveCb,
                },
              }
            }),
            (n.prototype.componentWillEnter = function(e) {
              var t = this._willEnter.map(function(e) {
                return new Promise(function(t) {
                  e(t)
                })
              })
              Promise.all(t).then(e)
            }),
            (n.prototype.componentDidEnter = function() {
              this._didEnter.forEach(function(e) {
                e()
              })
            }),
            (n.prototype.componentWillLeave = function(e) {
              var t = this._willLeave.map(function(e) {
                return new Promise(function(t) {
                  e(t)
                })
              })
              Promise.all(t).then(e)
            }),
            (n.prototype.componentDidLeave = function() {
              this._didLeave.forEach(function(e) {
                e()
              })
            }),
            (n.prototype.render = function() {
              return h.createElement(e, m.a({}, this.props), this.props.children)
            }),
            n
          )
        })(h.PureComponent)),
        (t.displayName = 'Lifecycle Provider'),
        (t.childContextTypes = { lifecycleProvider: d.object }),
        t
      )
    }
    function a(e) {
      var t
      return (
        (t = (function(t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            m.c(n, t),
            (n.prototype.componentWillEnter = function(e) {
              this.props.beforeOpen ? this.props.beforeOpen(e) : e()
            }),
            (n.prototype.componentDidEnter = function() {
              this.props.afterOpen && this.props.afterOpen()
            }),
            (n.prototype.componentWillLeave = function(e) {
              this.props.beforeClose ? this.props.beforeClose(e) : e()
            }),
            (n.prototype.componentDidLeave = function() {
              this.props.afterClose && this.props.afterClose()
            }),
            (n.prototype.render = function() {
              return h.createElement(e, m.a({}, this.props))
            }),
            n
          )
        })(h.PureComponent)),
        (t.displayName = 'OverlapLifecycle(' + (e.displayName || 'Component') + ')'),
        t
      )
    }
    function s(e) {
      var t,
        n = r(Object(p.a)(a(e)))
      return (
        (t = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this
            return (
              (n._onZIndexUpdate = function() {
                n.props.isOpened &&
                  ('parent' === n.props.root ? n.forceUpdate() : n._renderWindow(n.props))
              }),
              (n._uuid = Object(u.guid)()),
              (n._zIndexUpdateEvent = _.ZindexUpdate + ':' + n._uuid),
              n
            )
          }
          return (
            m.c(t, e),
            (t.prototype.componentDidMount = function() {
              this._subscribe()
            }),
            (t.prototype.componentDidUpdate = function(e) {
              e.isOpened !== this.props.isOpened &&
                this.props.isOpened &&
                l.notifyWindows(_.ZindexUpdate, this._uuid)
            }),
            (t.prototype.componentWillUnmount = function() {
              this._unsubscribe(), l.removeWindow(this._uuid)
            }),
            (t.prototype.componentWillReceiveProps = function(e) {
              'parent' !== this.props.root && this._renderWindow(e)
            }),
            (t.prototype.render = function() {
              return 'parent' === this.props.root
                ? h.createElement(
                    f.TransitionGroup,
                    { component: 'div' },
                    this._createContent(this.props),
                  )
                : null
            }),
            (t.prototype._renderWindow = function(e) {
              l.renderWindow(this._uuid, this._createContent(e))
            }),
            (t.prototype._createContent = function(e) {
              return e.isOpened
                ? (l.registerWindow(this._uuid),
                  h.createElement(
                    n,
                    m.a({}, e, { key: this._uuid, zIndex: l.getZindex(this._uuid) }),
                    e.children,
                  ))
                : (l.unregisterWindow(this._uuid), null)
            }),
            (t.prototype._subscribe = function() {
              l.getStream().on(this._zIndexUpdateEvent, this._onZIndexUpdate)
            }),
            (t.prototype._unsubscribe = function() {
              l.getStream().off(this._zIndexUpdateEvent, this._onZIndexUpdate)
            }),
            t
          )
        })(h.PureComponent)),
        (t.displayName = 'Overlapable(' + (e.displayName || 'Component') + ')'),
        t
      )
    }
    var c,
      l,
      d,
      p,
      u,
      m = n(1),
      h = n(20),
      f = n(302),
      v = n(59),
      g = n(301),
      y = n.n(g),
      w = (function() {
        function e() {
          this._storage = []
        }
        return (
          (e.prototype.add = function(e) {
            this._storage.push(e)
          }),
          (e.prototype.remove = function(e) {
            this._storage = this._storage.filter(function(t) {
              return e !== t
            })
          }),
          (e.prototype.getIndex = function(e) {
            return this._storage.findIndex(function(t) {
              return e === t
            })
          }),
          (e.prototype.toTop = function(e) {
            this.remove(e), this.add(e)
          }),
          (e.prototype.has = function(e) {
            return this._storage.includes(e)
          }),
          (e.prototype.getItems = function() {
            return this._storage
          }),
          e
        )
      })(),
      _ = { ZindexUpdate: 'ZindexUpdate' },
      b = new w(),
      E = new y.a(),
      C = new Map()
    !(function(e) {
      function t(e) {
        b.has(e) || b.add(e)
      }
      function n(e) {
        b.remove(e), C.delete(e)
      }
      function o(e) {
        return b.getIndex(e) + 150
      }
      function r(e, t, n) {
        C.set(e, t), i(n)
      }
      function a(e, t) {
        n(e), i(t)
      }
      function s() {
        return E
      }
      function c(e, t) {
        b.getItems().forEach(function(n) {
          n !== t && E.emitEvent(e + ':' + n)
        })
      }
      ;(e.registerWindow = t),
        (e.unregisterWindow = n),
        (e.getZindex = o),
        (e.renderWindow = r),
        (e.removeWindow = a),
        (e.getStream = s),
        (e.notifyWindows = c)
    })(l || (l = {})),
      o(),
      (d = n(104)),
      (p = n(868)),
      (u = n(33)),
      (t.a = s)
  },
  968: function(e, t, n) {
    'use strict'
    function o(e) {
      var t = e.hideIcon
        ? null
        : s.createElement(d.a, { className: c.close, icon: l, onClick: e.onClose })
      return s.createElement(
        'div',
        { className: c.header, 'data-dragg-area': !0, ref: e.reference },
        e.children,
        t,
      )
    }
    function i(e) {
      return s.createElement('div', { className: p.footer, ref: e.reference }, e.children)
    }
    function r(e) {
      return s.createElement('div', { className: u.body, ref: e.reference }, e.children)
    }
    function a(e) {
      var t, n
      return (
        e.text
          ? (t = s.createElement('span', null, e.text))
          : e.html &&
            (t = s.createElement('span', { dangerouslySetInnerHTML: { __html: e.html } })),
        (n = m.message),
        e.isError && (n += ' ' + m.error),
        s.createElement(
          h.CSSTransitionGroup,
          {
            transitionName: 'message',
            transitionEnterTimeout: v.dur,
            transitionLeaveTimeout: v.dur,
          },
          t
            ? s.createElement(
                'div',
                { className: n, key: '0' },
                s.createElement(
                  f.a,
                  { mouseDown: !0, touchStart: !0, handler: e.onClickOutside },
                  t,
                ),
              )
            : null,
        )
      )
    }
    var s = n(20),
      c = n(969),
      l = n(828),
      d = n(300),
      p = n(970),
      u = n(971),
      m = n(972),
      h = n(302),
      f = n(304),
      v = n(184)
    n.d(t, 'b', function() {
      return o
    }),
      n.d(t, !1, function() {
        return i
      }),
      n.d(t, 'a', function() {
        return r
      }),
      n.d(t, 'c', function() {
        return a
      })
  },
  969: function(e, t) {
    e.exports = { header: 'header-dpl-vtN_-', close: 'close-3kPn4OTV-' }
  },
  970: function(e, t) {
    e.exports = { footer: 'footer-2Zoji8zg-' }
  },
  971: function(e, t) {
    e.exports = { body: 'body-2N-vuwQW-' }
  },
  972: function(e, t) {
    e.exports = { message: 'message-2o-rtQm0-', error: 'error-2EW0C6z--' }
  },
})
