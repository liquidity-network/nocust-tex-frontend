webpackJsonp([20], {
  1074: function(t, e, i) {
    'use strict'
    var n = i(5)
    ;(t.exports.displayedExchangesFilter = function(t) {
      return (
        n.enabled('symbol_search_limited_exchanges') &&
          (t = t.filter(function(t) {
            return !('bitcoin' === t.flag || t.hideInSymbolSearch)
          })),
        t
      )
    }),
      (t.exports.sortExchangesListByFlagIfNeeded = function(t) {
        return t
      })
  },
  1075: function(t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      i.d(e, 'types', function() {
        return n
      })
    var n = { ECONOMIC: 'economic', QUANDL: 'quandl' }
  },
  332: function(t, e, i) {
    'use strict'
    ;(function(e) {
      function n() {
        if ('undefined' == typeof tradingService) return null
        var t = tradingService()
        return t && t.connectStatus() === CONNECTSTATUSES.CONNECTED ? t.activeBroker() : null
      }
      function o() {
        var t = n()
        if (t && t.metainfo().configFlags.supportSymbolSearch)
          return t.metainfo().symbolSearchId || t.metainfo().id.toLowerCase()
      }
      function s(t) {
        d(t), u.interval.setValue(t)
      }
      function a(t) {
        return S[t.prefix || t.exchange] || t.exchange || ''
      }
      function l() {
        var t = TVSettings.getValue('symboledit.exchangefilter')
        return /_MINI$/.test(t) ? '' : t
      }
      function r(t, e) {
        return e in t || (t[e] = 'bitcoin' === e ? window.t('crypto') : window.t(e)), t[e]
      }
      var c = i(61),
        d = c.setLastUsedResolution,
        u = i(62).linking,
        p = i(1074),
        h = i(307),
        g = i(305).Spinner,
        f = i(132),
        m = i(322).regExpEscape,
        _ = i(1075),
        v = i(192),
        y = i(106).isFeatureEnabled,
        b = i(883).TVOldDialogs,
        C = i(311).globalKeypressMatches,
        x = i(311).sanitizeIntervalValue,
        k = i(311).canShowSpreadActions,
        w = y('futures-descriptions'),
        I = 1e3,
        T =
          '<div class="symbol-block"><div class="spread-actions"></div><div class="symbol-block-inputspacer"><input maxlength="' +
          I +
          '" /><div class="search-icon"></div></div></div><div class="filter"></div><div class="results"></div>',
        S = {},
        E = /^(\w{3,4}) (\d{4})$/,
        D = (function() {
          function t(i) {
            var n, o, s, a
            if (!(this instanceof t)) throw new TypeError('SymbolSearch is a constructor')
            if (
              ((i = i || {}),
              (n = !i.dontUseInputParser && e.enabled('symbol_search_parser_mixin') && k()),
              (this._inputParserMixin = n ? new SymbolSearchInputParserMixin(this) : void 0),
              (this._inputElement = $(i.input).get(0)),
              !this._inputElement)
            )
              throw new TypeError('options.input must be a DOM element, jQuery object or selector')
            if (
              ((this.$list = $(i.list).eq(0)),
              0 === this.$list.size() && delete this.$list,
              void 0 !== i.callback)
            ) {
              if ('function' != typeof i.callback)
                throw new TypeError('options.callback must be function')
              this._callback = i.callback
            }
            if (void 0 !== i.onValueChanged) {
              if ('function' != typeof i.onValueChanged)
                throw new TypeError('options.onValueChanged must be function')
              this._onValueChanged = i.onValueChanged
            }
            if (void 0 !== i.onEmptyApply) {
              if ('function' != typeof i.onEmptyApply)
                throw new TypeError('options.onEmptyApply must be function')
              this._onEmptyApply = i.onEmptyApply
            }
            if (
              (i.ignoreInterval && (this._ignoreInterval = !0),
              t.resetStoredInterval(),
              i.hidePro && (this._hidePro = !0),
              i.allowMultipleSymbols && (this._allowMultipleSymbols = !0),
              void 0 !== i.onParse)
            ) {
              if ('function' != typeof i.onParse)
                throw new TypeError('options.onParse must be function')
              this._onParse = i.onParse
            }
            for (
              this._state = {},
                this._resolveViaSymbolSearchId = null,
                this.acceptEmpty = !!i.acceptEmpty,
                $(this._inputElement).data('symbol-search-instance', this),
                o = this._boundListener = this._eventListener.bind(this),
                s = this.boundTimeoutListener = function(t) {
                  setTimeout(function() {
                    o(t)
                  }, 0)
                },
                a = 0;
              a < L.length;
              a++
            )
              L[a].immediate
                ? $(this._inputElement).on(L[a].name, o)
                : $(this._inputElement).on(L[a].name, s)
            ;(this._boundOnKeyDown = this._onKeyDown.bind(this)),
              (this._boundOnKeyPress = this._onKeyPress.bind(this)),
              $(this._inputElement)
                .on('keydown', this._boundOnKeyDown)
                .on('keypress', this._boundOnKeyPress),
              this._eventListener(),
              i.autoFocus && t.registerAutoFocus(this)
          }
          function i(t, e) {
            var i,
              n = ChartApiInstance.supportedSymbolsTypes()
            return (
              o() &&
                (n = n.filter(function(t) {
                  return 'quandl' !== t.value && 'economic' !== t.value
                })),
              (i = TVSettings.getValue('symboledit.filter')),
              !n.some(function(t) {
                return t.value === i
              }) &&
                n.length > 0 &&
                (i = n[0].value),
              0 !== n.length &&
                (n.forEach(function(n) {
                  var o = n.value,
                    s = $('<a class="type-filter">')
                      .attr('href', '#' + o)
                      .text($.t(n.name))
                  o === i && s.addClass('active'),
                    s.on('click', function(i) {
                      i.preventDefault(),
                        e.find('.type-filter').removeClass('active'),
                        $(this).addClass('active'),
                        t.typeFilter(o),
                        TVSettings.setValue('symboledit.filter', o)
                    }),
                    s.appendTo(e)
                }),
                t.typeFilter(i),
                !0)
            )
          }
          function c(t, e) {
            var i,
              n,
              o = ChartApiInstance.supportedExchangesList()
            if (
              (o.reduce(function(t, e) {
                return (t[e.value] = e.name), t
              }, S),
              (i = l()),
              'bovespa' !== TradingView.widgetCustomer)
            )
              return (
                0 !== o.length &&
                ((n = $('<div id="exchange-filter" class="exchange-filter">').appendTo(e)),
                F(t, o, i, n),
                t.setExchangeFilter(i),
                !0)
              )
          }
          function d(t) {
            var e = c(t, t.$filterContainer)
            return t.selectExchangeFilter(), e
          }
          function I(t) {
            var e,
              n,
              o,
              s,
              a,
              l,
              r,
              c,
              u,
              p,
              h = $('<div class="symbol-edit-popup">').appendTo(document.body),
              g = $('<div class="filter">').appendTo(h)
            return (
              (t.$filterContainer = g),
              i(t, g),
              d(t, g),
              (e = $('<div class="table-wrapper">').appendTo(h)),
              (n = $(t._inputElement)),
              (o = n.offset()),
              (s = 0),
              (a = Math.max(0, Math.min(o.left + s, $(window).width() - h.outerWidth()))),
              h.css('left', a + 'px'),
              h.css('top', o.top + n.outerHeight() + 1),
              (l = g.outerHeight()),
              (r = $(window).scrollTop()),
              (c = n.height()),
              (u = TradingView.isMobile.any()
                ? parseInt(window.screen.height, 10)
                : parseInt($(window).height(), 10)),
              (p = u - (o.top - r) - c / 2),
              e.css('maxHeight', p - c - l + 'px'),
              { popup: h, listWrapper: e }
            )
          }
          function D(t, e, i) {
            ;(this._container = t),
              (this._tickerRegExp = e),
              (this._translationCache = i),
              (this._exchangeNameCache = this._roots = {}),
              (this._itemsByTicker = {})
          }
          var O,
            A,
            F,
            L = [
              { name: 'input', immediate: !0 },
              { name: 'sync', immediate: !0 },
              { name: 'keypress' },
              { name: 'keydown' },
              { name: 'keyup' },
              { name: 'mousedown' },
              { name: 'mouseup' },
              { name: 'cut' },
              { name: 'paste' },
            ],
            M = !0
          return (
            (M = !1),
            (O = [/^e\-m/i]),
            (A = /<\/?[^>]+(>|$)/g),
            (t.registerAutoFocus = function(e) {
              if (
                (e instanceof jQuery && (e = e.data('symbol-search-instance')), !(e instanceof t))
              )
                throw new TypeError(
                  'arg must be an SymbolSearch instance of jQuery input with bound SymbolSearch object',
                )
              h.registerListener(
                'symbolEdit',
                function(t) {
                  if (C(t)) {
                    t.preventDefault(),
                      this.resetState(),
                      (this._skipAutoFocus = !0),
                      this._inputElement.focus()
                    var e = String.fromCharCode(t.charCode)
                    'function' == typeof this._setInputValue
                      ? this._setInputValue(e)
                      : (this._inputElement.value = e),
                      this._eventListener()
                  }
                }.bind(e),
              )
            }),
            (t.prototype.searchRequestDelay = 0),
            (t.setSearchRequestDelay = function(e) {
              t.prototype.searchRequestDelay = e
            }),
            (t.prototype.resetState = function() {
              this._state = {}
            }),
            (t.prototype.typeFilter = function(t) {
              if (!(arguments.length > 0)) return this._state.typeFilter
              t !== this._state.typeFilter &&
                (null == t ? delete this._state.typeFilter : (this._state.typeFilter = t + ''),
                delete this._state.keepListFor,
                this._onSelectionChanged(),
                this.selectExchangeFilter())
            }),
            (t.prototype.setExchangeFilter = function(t) {
              t !== this._state.exchangeFilter &&
                (null == t
                  ? delete this._state.exchangeFilter
                  : (this._state.exchangeFilter = t + ''),
                delete this._state.keepListFor,
                this._onSelectionChanged())
            }),
            (t.prototype.setTradableFilter = function(t) {
              t !== this._state.tradableFilter &&
                ((this._state.tradableFilter = t), this._onSelectionChanged())
            }),
            (t.prototype.getExchangeFilter = function() {
              return this._state.exchangeFilter
            }),
            (t.prototype.destroy = function() {
              $(this._inputElement).off(),
                $(this._inputElement).removeData('symbol-search-instance')
            }),
            (t.prototype._moveSelection = function(t, e) {
              var i, n, o, s, a, l, r, c, d
              this.$list &&
                ((i = this.$list.find('table.symbol-edit-popup')),
                (n = i.find('tr:not(.hidden)')),
                (o = i.find('tr.symbol-edit-popup-active').removeClass('symbol-edit-popup-active')),
                (s = 0 !== o.length ? n.index(o) : -1),
                (a = 1 === t ? (o.get(0) === n.get(-1) ? 0 : s + t) : Math.max(-1, s + t)),
                s !== a &&
                  (l = n.get(a)) &&
                  ((r = this._getItemByElement(l)),
                  (c = D.isRoot(r)),
                  c
                    ? ((d = l.getAttribute('data-root')),
                      l.classList.add('symbol-edit-popup-active'),
                      this._scrollHighlightIntoView(),
                      d
                        ? ((this._state.highlightedItem = null), (this._selectedGroupRoot = d))
                        : ((this._state.highlightedItem = r), this._replaceCurrentSymbol(e)))
                    : (delete this._selectedGroupRoot, this._highlightItem(r, !0, e))))
            }),
            (t.prototype._groupToggleCollapsed = function(t, e) {
              this._groupListHandler && this._groupListHandler.toggleCollapsed(t, e)
            }),
            (t.prototype._onKeyDown = function(t) {
              ;(t.keyCode !== v.DOWN_ARROW && t.keyCode !== v.UP_ARROW) ||
                (this._moveSelection(t.keyCode === v.DOWN_ARROW ? 1 : -1, !0),
                t.preventDefault(),
                t.stopPropagation()),
                t.keyCode === v.ENTER && t.stopPropagation(),
                !this._selectedGroupRoot ||
                  (t.keyCode !== v.LEFT_ARROW && t.keyCode !== v.RIGHT_ARROW) ||
                  (this._groupToggleCollapsed(this._selectedGroupRoot, t.keyCode === v.LEFT_ARROW),
                  t.preventDefault())
            }),
            (t.prototype._onKeyPress = function(t) {
              if (t.keyCode === v.DOWN_ARROW || t.keyCode === v.UP_ARROW) {
                if (t.charCode) return
                if (this._boundOnKeyDown)
                  return (
                    $(this._inputElement).off('keydown', this._boundOnKeyDown),
                    delete this._boundOnKeyDown,
                    void t.preventDefault()
                  )
                this._moveSelection(t.keyCode === v.DOWN_ARROW ? 1 : -1), t.preventDefault()
              }
              t.keyCode === v.ENTER &&
                (this._selectedGroupRoot
                  ? (this._groupToggleCollapsed(this._selectedGroupRoot, !1), t.preventDefault())
                  : this.acceptTypeIn())
            }),
            (t.prototype._eventListener = function(t, i) {
              var n,
                o,
                s,
                a,
                l,
                r = this._inputElement,
                c = this._getInputValue()
              e.enabled('uppercase_instrument_names') && (c = c.toUpperCase()),
                (n = !1),
                (o = !1),
                this._state.value !== c &&
                  (this._state.hasOwnProperty('value') &&
                    this._onValueChanged &&
                    this._onValueChanged(c),
                  (this._state.value = c),
                  (n = !0),
                  this._inputParserMixin && this._inputParserMixin.parse()),
                this._fixIntervalCase(),
                (s = this._limitInputSelectionValue('selectionStart')),
                this._state.selectionStart !== s && ((this._state.selectionStart = s), (o = !0)),
                (a = this._limitInputSelectionValue('selectionEnd')),
                this._state.selectionEnd !== a && ((this._state.selectionEnd = a), (o = !0)),
                this._state.selectionDirection !== r.selectionDirection &&
                  ((this._state.selectionDirection = r.selectionDirection), (o = !0)),
                (n || (o && this._inputParserMixin)) &&
                  (this._onSelectionChanged(void 0, i),
                  (l = !1),
                  this._getInputValue() !== this._state.value &&
                    (this._setInputValue(this._state.value), (l = !0)),
                  (l ||
                    this._state.selectionStart !==
                      this._limitInputSelectionValue('selectionStart') ||
                    this._state.selectionEnd !== this._limitInputSelectionValue('selectionEnd')) &&
                    r.setSelectionRange &&
                    r.setSelectionRange(
                      this._state.selectionStart,
                      this._state.selectionEnd,
                      this._state.selectionDirection,
                    ))
            }),
            (t.prototype._fixIntervalCase = function() {
              if (this._selectionInsideInterval()) {
                var e = t.detachInterval(this._inputElement.value)
                ;/[a-z]/.test(e.detached) &&
                  (this._inputElement.value = e.rest + e.detached.toUpperCase())
              }
            }),
            (t.prototype._selectionInsideInterval = function(e) {
              if (this._ignoreInterval) return !1
              var i = t.detachInterval(this._inputElement.value)
              return (
                !!i &&
                ('string' == typeof e
                  ? this._inputElement[e] > i.rest.length
                  : this._inputElement.selectionStart > i.rest.length &&
                    this._inputElement.selectionEnd > i.rest.length)
              )
            }),
            (t.prototype._limitInputSelectionValue = function(e) {
              return this._selectionInsideInterval(e)
                ? t.detachInterval(this._inputElement.value).rest.length
                : e in this._inputElement
                ? this._inputElement[e]
                : this._inputElement.value.length
            }),
            (t.prototype._getInputValue = function() {
              if (this._ignoreInterval) return this._inputElement.value
              var e = t.detachStoreInterval(this._inputElement.value)
              return $(this._inputElement).toggleClass('interval-error', t.intervalError()), e
            }),
            (t.prototype._setInputValue = function(e) {
              this._ignoreInterval
                ? (this._inputElement.value = e)
                : (this._inputElement.value = t.recallAttachInterval(e))
            }),
            (t.prototype._onSelectionChanged = function(t, e) {
              function i(t, e, i, n, s) {
                ;(o._state.contextTicker = t),
                  (o._state.contextExchange = e),
                  (o._state.contextType = i),
                  (o._state.contextTradable = s),
                  (o._state.keepListFor && o._state.keepListFor === n) ||
                    (o._getSuggestList(), delete o._state.keepListFor)
              }
              var n,
                o = this
              !O.some(function(t) {
                return t.test(o._state.value)
              }) &&
              (this._isSpreadInInput() || (this._inputParserMixin && !0 !== e))
                ? this._inputParserMixin.onSelectionChanged(i)
                : this.$list &&
                  ((this._state._selectedTicker = null),
                  (n = this._state.value),
                  this._isSpreadInInput() &&
                    this._state.contextToken &&
                    (n = this._state.contextToken.value),
                  i(
                    n,
                    this.getExchangeFilter(),
                    this._state.typeFilter,
                    n,
                    this._state.tradableFilter,
                  ))
            }),
            (t.prototype._clearSelectionState = function() {
              delete this._state.contextTicker,
                delete this._state.contextExchange,
                delete this._state.contextType,
                delete this._state.contextToken,
                delete this._state.keepListFor
            }),
            (t.prototype._clearSearchTimeout = function() {
              this._searchTimeout &&
                (clearTimeout(this._searchTimeout), (this._searchTimeout = null))
            }),
            (t.prototype._doGetSuggestList = function() {
              var t, e, i, s, a, l, r, c, d
              this._clearSearchTimeout(),
                (t = o()),
                (e = this._state.contextTicker || ''),
                (i = this._state.contextExchange || this.getExchangeFilter() || ''),
                (s = this._state.typeFilter || ''),
                (a = t && this._state.tradableFilter),
                (l = t && n().metainfo().unhideSymbolSearchGroups),
                (r = l && l.join(',')),
                t &&
                  tradingService().trackEvent('Symbol Search Tradable checkbox', a ? 'on' : 'off'),
                (c = window.language || ''),
                this._showLoading(),
                (d = this),
                ChartApiInstance.searchSymbols(e, i, s, c, M, !1, t, a, r, function(t) {
                  e !== (d._state.contextTicker || '') ||
                    i !== (d._state.contextExchange || d.getExchangeFilter() || '') ||
                    s !== (d._state.typeFilter || '') ||
                    (s === _.types.QUANDL && (t = d._processQuandlResponse(t)),
                    d._renderSuggestList(t),
                    d._onResponse(t))
                })
            }),
            (t.prototype._getSuggestList = function() {
              this._clearSearchTimeout(),
                (this._searchTimeout = setTimeout(
                  this._doGetSuggestList.bind(this),
                  t.prototype.searchRequestDelay,
                ))
            }),
            (t.prototype._showLoading = function() {
              if (this.$list && !this._spinner) {
                this._clearSuggestList()
                var t = $('<div class="symbol-search-loading">').appendTo(this.$list)
                this._spinner = new g('medium').spin(t.get(0))
              }
            }),
            (t.prototype._groupContracts = function(t) {
              var e,
                i,
                n,
                o,
                s,
                a = ChartApiInstance.futuresRegex(),
                l = {},
                r = []
              for (e = 0; e < t.length; ++e) {
                if (((i = t[e]), i.prefix || Array.isArray(i.contracts))) return t
                'futures' === i.type
                  ? ((n = a.exec(i.symbol)),
                    n
                      ? ((o = n[1]),
                        o in l
                          ? (s = l[o])
                          : ((s = r.length),
                            (l[o] = s),
                            r.push({
                              type: i.type,
                              symbol: o,
                              exchange: i.exchange,
                              description: i.description,
                              full_name: i.exchange + ':' + o,
                              contracts: [],
                            })),
                        r[s].contracts.push(i))
                      : r.push(i))
                  : r.push(i)
              }
              return r
            }),
            (t.prototype._renderSuggestList = function(i) {
              var n, o, s, a, l, r, c, d, u, p
              if (this.$list) {
                if (
                  ((i = this._groupContracts(i)),
                  (w = y('futures-descriptions')),
                  (n = this),
                  (o = this._state),
                  this._clearSuggestList(),
                  (s = m(o.contextTicker).trim()),
                  (a = RegExp(s.replace(' ', '|'), 'i' + (s.length > 1 ? 'g' : ''))),
                  delete o.highlightedItem,
                  this._hidePro &&
                    (i = i.filter(function(t) {
                      return !t.params || -1 === t.params.indexOf('pro')
                    })),
                  0 === i.length)
                )
                  return void this.$list.html(
                    '<div style="text-align: center; padding: 7px 0; font-style: italic;">' +
                      $.t('No symbols matched your criteria') +
                      '</div>',
                  )
                for (
                  l = document.createElement('table'),
                    l.setAttribute('class', 'symbol-edit-popup'),
                    r = {},
                    c = new t.GroupListHandler(l, a, r),
                    d = null,
                    this._renderedResponse = [],
                    u = 0;
                  u < i.length;
                  u++
                )
                  (p = i[u]),
                    c.append(p),
                    d ||
                      p.ticker !== o.contextTicker ||
                      p.exchange !== o.contextExchange ||
                      (d = p),
                    this._renderedResponse.push(p)
                e.enabled('expand_symbolsearch_items') || c.collapse(),
                  (this._groupListHandler = c),
                  d && this._highlightItem(p),
                  $(l)
                    .on('click', 'tr', function(t) {
                      if (!t.isDefaultPrevented()) {
                        t.preventDefault()
                        var e = n._getItemByElement(this)
                        e &&
                          e.full_name &&
                          (n._isSpreadInInput()
                            ? n._highlightItem(e, !0, !1)
                            : n.accept(e.full_name, e.ticker))
                      }
                    })
                    .appendTo(this.$list)
              }
            }),
            (t.prototype._isSpreadInInput = function() {
              return this._inputParserMixin && this._state.parsed.length > 1
            }),
            (t.prototype._getItemByElement = function(t) {
              return this._renderedResponse && this._groupListHandler
                ? this._groupListHandler.getItemByTicker(t.getAttribute('data-item-ticker'))
                : null
            }),
            (t.prototype._getElementByItem = function(t) {
              return this._renderedResponse && this.$list
                ? this.$list
                    .get(0)
                    .querySelector('tr[data-item-ticker="' + (t.ticker || t.full_name) + '"]')
                : null
            }),
            (t.prototype._highlightItem = function(t, e, i) {
              var n,
                o,
                s = this._state
              s.highlightedItem &&
                (n = this._getElementByItem(s.highlightedItem)) &&
                $(n).removeClass('symbol-edit-popup-active'),
                (s.highlightedItem = t),
                (o = this._getElementByItem(s.highlightedItem)),
                o && ($(o).addClass('symbol-edit-popup-active'), this._scrollHighlightIntoView()),
                e && this._replaceCurrentSymbol(i)
            }),
            (t.prototype._scrollHighlightIntoView = function() {
              var t = this.$list.find('tr.symbol-edit-popup-active')
              t.length &&
                (t.offset().top < this.$list.offset().top
                  ? this.$list.scrollTop(
                      this.$list.scrollTop() - (this.$list.offset().top - t.offset().top),
                    )
                  : t.offset().top + t.outerHeight() >
                      this.$list.offset().top + this.$list.outerHeight() &&
                    this.$list.scrollTop(
                      this.$list.scrollTop() +
                        (t.offset().top +
                          t.outerHeight() -
                          (this.$list.offset().top + this.$list.outerHeight())),
                    ))
            }),
            (t.prototype._clearSuggestList = function() {
              ;(this._renderedResponse = null),
                this._spinner && (this._spinner.stop(), delete this._spinner),
                this.$list && this.$list.empty()
            }),
            (t.prototype._showErrorNotice = function() {
              this.$list && (this._clearSuggestList(), this.$list.text('Invalid expression'))
            }),
            (t.prototype._replaceCurrentSymbol = function(t) {
              var e,
                i,
                n,
                o,
                s = this._state
              if (s.highlightedItem) {
                if (
                  ((e = s.highlightedItem),
                  (i = ''),
                  (n = 0),
                  this._isSpreadInInput() || (this._inputParserMixin && !0 !== t))
                ) {
                  if (((o = this._inputParserMixin.replaceCurrentSymbol(e)), !o.ok)) return
                  ;(i = o.newValue), (n = o.newCaretPos), (s.keepListFor = o.keepListFor)
                } else
                  (this._state._selectedTicker = e.ticker || e.symbol),
                    (s.keepListFor = this._state._selectedTicker),
                    (i =
                      !0 === t && e.full_name && this._inputParserMixin ? e.full_name : e.symbol),
                    (n = i.length)
                this._setInputValue(M ? i.replace(A, '') : i),
                  this._inputElement.setSelectionRange
                    ? this._inputElement.setSelectionRange(n, n)
                    : this._inputElement.select(),
                  this._eventListener(void 0, t)
              }
            }),
            (t.prototype.splitAndAcceptUserInput = function() {
              var t,
                e = this._getInputValue().split(',')
              for (t = 0; t < e.length; t++) this.acceptSymbolIn(e[t])
            }),
            (t.prototype.acceptSymbolIn = function(t) {
              var e, i
              this._inputParserMixin
                ? (e = this._inputParserMixin.parseSymbol(t))
                : ((e = t), (i = this._state._selectedTicker || t)),
                this.accept(e, i)
            }),
            (t.prototype.acceptTypeIn = function() {
              this._allowMultipleSymbols
                ? this.splitAndAcceptUserInput()
                : this.acceptSymbolIn(this._getInputValue())
            }),
            (t.prototype.accept = function(e, i) {
              var n = this
              !(function() {
                if ((i = i || e) || ('' === i && n.acceptEmpty)) {
                  delete n._state.keepListFor
                  var o = n._ignoreInterval ? void 0 : t.getInterval(!0)
                  ;(n._inputElement.value = e),
                    n._eventListener(),
                    n._callback && n._callback(i, o),
                    $(n._inputElement).trigger('accept-symbol', [i])
                }
              })()
            }),
            (t.prototype.bindListWrapper = function(t) {
              if (((t = $(t).eq(0)), 0 === t.size()))
                throw new TypeError('element must be a DOM element, jQuery object or selector')
              ;(this.$list = t), this._clearSelectionState(), this._eventListener()
            }),
            (t.prototype.removeListWrapper = function() {
              delete this.$list,
                this._clearSuggestList(),
                this._clearSelectionState(),
                this._eventListener()
            }),
            (t.prototype.selectExchangeFilter = function() {
              this.$filterContainer.find('.exchange-filter').hide(),
                this._state.typeFilter === _.types.QUANDL
                  ? this.$filterContainer.find('#quandl-filter').show()
                  : this._state.typeFilter !== _.types.ECONOMIC &&
                    this.$filterContainer.find('#exchange-filter').show()
            }),
            (t.prototype._onResponse = function(t) {
              if (t.length > 0) {
                this._state.typeFilter === _.types.QUANDL && this._showNotification()
              }
            }),
            (t.prototype._showNotification = function() {
              var t, e, i
              TVSettings.getBool('symboledit.show_quandl_notification', !0) &&
                ((t =
                  $.t(
                    'Quandl is a huge financial database that we have connected to TradingView. Most of its data is EOD and is not updated in real-time, however the information may be extremely useful for fundamental analysis.',
                  ) +
                  ' <a target="_blank" href="' +
                  ('ru' === window.locale
                    ? 'http://blog.tradingview.com/?p=1530&lang=ru'
                    : 'http://blog.tradingview.com/?p=1530') +
                  '">' +
                  $.t('Read our blog for more info!') +
                  '</a>'),
                (e = $('<div class="symbol-edit-notification">').prependTo(this.$list)),
                e.html(t),
                e.find('a').click(function(t) {
                  t.preventDefault()
                  var e = $(this).attr('href')
                  window.open(e, '_blank')
                }),
                (i = $('<a class="close">').appendTo(e)),
                i.click(function() {
                  TVSettings.setValue('symboledit.show_quandl_notification', !1), e.remove()
                }))
            }),
            (t.prototype._processQuandlResponse = function(t) {
              return t.datasets
                .filter(function(t) {
                  return !t.premium
                })
                .map(function(t) {
                  return {
                    description: t.name,
                    exchange: t.database_code,
                    full_name: 'QUANDL:' + t.database_code + '/' + t.dataset_code,
                    params: ['eod'],
                    symbol: t.dataset_code,
                    type: 'quandl',
                  }
                })
            }),
            (t.prototype.forceFocus = function() {
              this._inputElement.focus()
            }),
            (t.createSuggestListRow = function(e, i, n, o) {
              var s, l, c, d, u, p, h, g, f, m, _, v, y, b
              return (
                o || (o = {}),
                (s = document.createElement('tr')),
                (l = 'symbol-edit-popup'),
                o.addClass && (l += ' ' + o.addClass),
                s.setAttribute('class', l),
                (c = !M || 'quandl' === e.type),
                (d = document.createElement('td')),
                d.setAttribute(
                  'class',
                  'symbol-edit-popup-td name apply-overflow-tooltip apply-overflow-tooltip--allow-text',
                ),
                (u = c ? e.symbol.replace(i, '<strong>$&</strong>') : e.symbol),
                (p = o.nameContent || u),
                e.broker_symbol &&
                  (p =
                    p +
                    ' (' +
                    (c ? e.broker_symbol.replace(i, '<strong>$&</strong>') : e.broker_symbol) +
                    ')'),
                (d.innerHTML = p),
                (h = document.createElement('td')),
                h.setAttribute('class', 'symbol-edit-popup-td desc apply-overflow-tooltip'),
                (g = e.description.toUpperCase()),
                w &&
                  e.contractDescription &&
                  ((f = E.exec(e.contractDescription)),
                  (g += f
                    ? ' (' + r(n, f[1]) + ' ' + f[2] + ')'
                    : ' (' + r(n, e.contractDescription) + ')')),
                (h.innerHTML = !c || i.test(e.symbol) ? g : g.replace(i, '<strong>$&</strong>')),
                (m = document.createElement('td')),
                m.setAttribute('class', 'symbol-edit-popup-td type apply-overflow-tooltip'),
                (_ = ''),
                o.typeContent
                  ? (_ = o.typeContent)
                  : (e.params && ~e.params.indexOf('eod') && (_ = '<i class="eod">eod</i>&nbsp;'),
                    (v = r(n, e.type)),
                    e.exchange
                      ? e.exchange.startsWith('CHXEUR_')
                        ? (_ += v + ' - ' + e.exchange.split('_')[0])
                        : (_ += v + ' - ' + a(e))
                      : (_ += v)),
                (m.innerHTML = _),
                (y = document.createElement('td')),
                y.setAttribute('class', 'symbol-edit-popup-td flag apply-overflow-tooltip'),
                (y.innerHTML = t.getItemFlag(e)),
                (b = y.getElementsByTagName('svg')[0]),
                b && b.setAttribute('class', 'flag'),
                s.appendChild(d),
                s.appendChild(h),
                s.appendChild(m),
                s.appendChild(y),
                s
              )
            }),
            (t.getItemFlag = function(t) {
              return ''
            }),
            (F = function(t, i, n, o) {
              ;(i = p.displayedExchangesFilter(i)),
                !i.some(function(t) {
                  return t.value === n
                }) &&
                  i.length > 0 &&
                  (n = i[0].value)
              var s = $('<select>').appendTo(o)
              i.forEach(function(t) {
                var e = t.value,
                  i = t.name || e,
                  o = t.desc || i,
                  a = $('<option>')
                    .addClass('filter-item')
                    .attr('value', e)
                    .text($.t(i))
                    .data('custom-option-text', $.t(o))
                    .appendTo(s)
                t.value === n && a.attr('selected', !0)
              }),
                s.change(function() {
                  var e = $(this).val() || ''
                  TVSettings.setValue('symboledit.exchangefilter', e), t.setExchangeFilter(e)
                }),
                s.selectbox({
                  speed: 0,
                  useCustomPrependWithSelector: 'after',
                  customPrependSelectorClass: 'exchange-with-flag',
                  classHolder: 'tv-unstyled-select-container tv-symbol-select',
                  classOptions: e.enabled('symbol_search_three_columns_exchanges')
                    ? 'sbOptions three-column-filter'
                    : 'sbOptions',
                })
            }),
            (t.showDialog = function(e) {
              var n, o, s, a, l, r, c, u, p, h, g, f
              if (((e = e || {}), (n = 'Symbol Search'), !b.get(n)))
                return (
                  (o = b.createDialog(n, {
                    hideTitle: !0,
                    hideCloseCross: !0,
                    dragHandle: '.filter',
                    width: '750px',
                    dragOptions: { cancel: '.sbOptions' },
                    content: T,
                    ownerDocument: e.ownerDocument,
                  })),
                  b.positionDialog(o),
                  (s = o.find('._tv-dialog-content').addClass('symbol-search-dialog')),
                  (a = s.find('.results')),
                  a.mousewheel(function(t, e) {
                    var i = $(this)
                    e > 0 ? i.scrollTop(i.scrollTop() - 15) : i.scrollTop(i.scrollTop() + 15)
                  }),
                  (l = s.find('input').get(0)),
                  e.initialValue && (l.value = e.initialValue),
                  'selectionStart' in l && (l.selectionStart = l.selectionEnd = l.value.length),
                  l.focus(),
                  k() &&
                    (e.ignoreInterval ||
                      ((c = t.getInputValueGetter(l)), (u = t.getInputValueSetter(l))),
                    (r = SymbolSearchInputParserMixin.addSpreadActions(
                      s.find('.spread-actions'),
                      l,
                      c,
                      u,
                    ))),
                  (p = new t({
                    input: l,
                    list: s.find('.results').get(0),
                    callback: function(t, i) {
                      e.callback && e.callback(t, i), b.destroy(n)
                    },
                    onParse: r,
                    ignoreInterval: e.ignoreInterval,
                  })),
                  (h = s.find('.filter')),
                  (p.$filterContainer = h),
                  (g = i(p, h)),
                  (f = d(p, h)),
                  g || f || h.attr('style', 'display: none'),
                  b.resizeContent(o.height(), a),
                  b.applyHandlers(o),
                  b.positionDialog(o),
                  o.on('destroy', function() {
                    TVSettings.setValue('symboledit.dialog_last_entry', l.value)
                  }),
                  o
                )
            }),
            (t.bindToInput = function(i, n) {
              function o() {
                m &&
                  (w.removeListWrapper(),
                  m.off(),
                  m.remove(),
                  (m = null),
                  f.hide(),
                  'function' == typeof n.onPopupClose && n.onPopupClose())
              }
              function a(t) {
                t.preventDefault()
              }
              function l() {
                var t, i, o, s
                if (
                  (m ||
                    ((t = I(w)),
                    (m = t.popup),
                    w.bindListWrapper(t.listWrapper),
                    m.on('focus', a),
                    m.on('click', a),
                    m.on('mousedown', a),
                    m.on('focus', '*', a),
                    m.on('click', '*', a),
                    m.on('mousedown', '*', a),
                    'function' == typeof n.onPopupOpen && n.onPopupOpen(t.popup)),
                  e.enabled('charting_library_base') && ((i = this._state), i.keepListFor))
                ) {
                  if (!i.highlightedItem) return void delete this._state.keepListFor
                  ;(o = i.highlightedItem),
                    (s = this._getInputValue()),
                    e.enabled('uppercase_instrument_names') && (s = s.toUpperCase()),
                    o.symbol !== s && delete this._state.keepListFor
                }
              }
              function r(t, e) {
                var i
                return e
                  ? (RegExp('^' + _.types.QUANDL, 'i').test(t)
                      ? ((i = t.split(/\//)), i.length && (t = i[i.length - 1]))
                      : (t = u.seriesShortSymbol.value() || t),
                    t)
                  : t
              }
              function c(t) {
                var e = u.symbol.value() || ''
                ;(e = r(e, t)), i.val(e), w.resetState()
              }
              var d, p, h, g, m, y, b, C, x, w, T, S, E
              return (
                (n = n || {}),
                (i = $(i).eq(0)),
                (d = n.callback),
                (p = null),
                (h = null),
                (g = !1),
                (m = null),
                (b = n.spreadActions && $(n.spreadActions).eq(0)),
                b &&
                  b.size() &&
                  k() &&
                  (n.ignoreInterval ||
                    ((C = t.getInputValueGetter(i.get(0))), (x = t.getInputValueSetter(i.get(0)))),
                  (y = SymbolSearchInputParserMixin.addSpreadActions(b, i.get(0), C, x))),
                (w = new t({
                  input: i,
                  onValueChanged: l,
                  callback: function(t, e) {
                    o(),
                      ('function' == typeof h && h(t, e)) ||
                        ('function' == typeof d && d(t, e), 'function' == typeof p && p(t, e)),
                      n.clearAfterAccept && i.val(''),
                      n.keepFocus ? i.get(0).focus() : i.get(0).blur(),
                      w.resetState()
                  },
                  hidePro: n.hidePro,
                  autoFocus: n.autoFocus,
                  onEmptyApply: n.onEmptyApply,
                  onParse: y,
                  acceptEmpty: n.acceptEmpty,
                  dontUseInputParser: n.dontUseInputParser,
                  allowMultipleSymbols: n.allowMultipleSymbols,
                  ignoreInterval: n.ignoreInterval,
                })),
                (T = !1),
                (S = !0),
                TradingView.isMobile.iOS() && $('body').css('cursor', 'pointer'),
                i.on('focus', function(t, e) {
                  ;(T = !0),
                    (g = !0),
                    w._skipAutoFocus
                      ? delete w._skipAutoFocus
                      : setTimeout(function() {
                          T && i.get(0).select()
                        }, 0)
                }),
                i.on('blur', function(t) {
                  var e,
                    n,
                    s,
                    a,
                    l = this
                  if (
                    m &&
                    ((e = document.activeElement),
                    (n = m.is(e)),
                    (s = m.has(e).length > 0),
                    (-1 !== navigator.userAgent.indexOf('Trident') ||
                      -1 !== navigator.userAgent.indexOf('MSIE')) &&
                      (n || s))
                  )
                    return (
                      t.preventDefault(),
                      t.stopImmediatePropagation(),
                      void setTimeout(function() {
                        i.focus()
                      }, 0)
                    )
                  TradingView.isMobile.iOS() && S && ((S = !1), (T = !0)),
                    TradingView.isMobile.iOS() && T && null === t.relatedTarget
                      ? ((a = function(t) {
                          $(l).is($(t.target)) ||
                            ((T = !1),
                            setTimeout(function() {
                              o()
                            }, 0),
                            $(document).off('click', 'body', a))
                        }),
                        $(document).on('click', 'body', a))
                      : (T = !1),
                    setTimeout(function() {
                      T || o()
                    }, 0)
                }),
                n.syncWithChartWidget &&
                  (c(!0),
                  u.seriesShortSymbol.subscribe(function() {
                    c(!0)
                  }),
                  (p = function(t, e) {
                    ;(g = !(t || e)), t && u.symbol.setValue(t), e && s(e)
                  }),
                  (h = function(t, e) {
                    return (
                      !e &&
                      (t === u.symbol.value() || (t === u.seriesShortSymbol.value() || void 0))
                    )
                  }),
                  n.syncOnBlur &&
                    i.on('blur', function() {
                      g && (c(!0), (g = !1))
                    }),
                  (E = function() {
                    i.get(0).blur(), c(!1)
                  }),
                  i.on('keypress', function(t) {
                    t.keyCode === v.ESC && E()
                  }),
                  i.on('keydown', function(t) {
                    t.keyCode === v.ESC && E()
                  })),
                w
              )
            }),
            (D.isRoot = function(t) {
              return !(!t || !Array.isArray(t.contracts))
            }),
            (D.prototype.addRoot = function(t, e) {
              var i, n
              ;(this._currentTbody = null),
                (i = document.createElement('tbody')),
                this._container.appendChild(i),
                (n = this),
                e.addEventListener('click', function(i) {
                  i.preventDefault(),
                    e.classList.contains('collapsed') ? n.expand(t) : n.collapse(t)
                }),
                e.setAttribute('data-root', t),
                i.appendChild(e),
                (this._roots[t] = { titleRow: e, tbody: i })
            }),
            (D.prototype.append = function(e) {
              var i,
                n,
                o,
                s,
                l,
                c = null,
                d = null
              if (D.isRoot(e))
                for (
                  i = e.symbol,
                    n = (e.exchange || 'unknown') + '_' + i,
                    c = t.createSuggestListRow(e, this._tickerRegExp, this._translationCache, {
                      nameContent:
                        '<div>' +
                        (M ? i : i.replace(this._tickerRegExp, '<strong>$&</strong>')) +
                        '</div>',
                      typeContent: r(this._translationCache, e.type) + (e.exchange && ' - ' + a(e)),
                      addClass: 'group-title',
                    }),
                    this._roots[n] || this.addRoot(n, c),
                    o = 0;
                  o < e.contracts.length;
                  ++o
                )
                  (s = e.contracts[o]),
                    (l = t.createSuggestListRow(s, this._tickerRegExp, this._translationCache)),
                    (d = s.ticker || s.full_name),
                    (this._itemsByTicker[d] = s),
                    l.setAttribute('data-item-ticker', d),
                    this._roots[n].tbody.appendChild(l)
              else
                this._currentTbody ||
                  ((this._currentTbody = document.createElement('tbody')),
                  this._container.appendChild(this._currentTbody)),
                  (c = t.createSuggestListRow(e, this._tickerRegExp, this._translationCache)),
                  this._currentTbody.appendChild(c)
              ;(d = e.ticker || e.full_name),
                (this._itemsByTicker[d] = e),
                c.setAttribute('data-item-ticker', d)
            }),
            (D.prototype.toggleCollapsed = function(t, e) {
              var i
              if (t)
                (i = this._roots[t]) &&
                  ($(i.titleRow).toggleClass('collapsed', !!e),
                  $(i.tbody)
                    .find('tr:not(.group-title)')
                    .toggleClass('hidden', !!e))
              else for (t in this._roots) this.toggleCollapsed(t, e)
            }),
            (D.prototype.collapse = function(t) {
              this.toggleCollapsed(t, !0)
            }),
            (D.prototype.expand = function(t) {
              this.toggleCollapsed(t, !1)
            }),
            (D.prototype.getItemByTicker = function(t) {
              return this._itemsByTicker[t] || null
            }),
            (t.GroupListHandler = D),
            (t.detachInterval = function(t) {
              var e = /,[^,]*$/i.exec(t) || []
              if (e[0]) return { rest: t.substr(0, t.length - e[0].length), detached: e[0] }
            }),
            (function() {
              var e = '',
                i = null
              ;(t.resetStoredInterval = function() {
                ;(e = ''), (i = null)
              }),
                (t.detachStoreInterval = function(n) {
                  var o = t.detachInterval(n)
                  return o ? ((e = o.detached), (i = x(e)), o.rest) : (t.resetStoredInterval(), n)
                }),
                (t.recallAttachInterval = function(t) {
                  return t + e
                }),
                (t.getInterval = function(e) {
                  var n = i
                  return !0 === e && t.resetStoredInterval(), n
                }),
                (t.getInputValueGetter = function(e) {
                  return function() {
                    return t.detachStoreInterval(e.value)
                  }
                }),
                (t.getInputValueSetter = function(e) {
                  return function(i) {
                    e.value = t.recallAttachInterval(i)
                  }
                }),
                (t.intervalError = function() {
                  return !(!e || /^,\s*$/.test(e)) && !i
                })
            })(),
            t
          )
        })()
      t.exports = D
    }.call(e, i(5)))
  },
  827: function(t, e, i) {
    'use strict'
    function n(t) {
      return t in $.fn
        ? Promise.resolve()
        : (a ||
            (a = new Promise(function(t) {
              i.e(31)
                .then(
                  function(e) {
                    i(831), t()
                  }.bind(null, i),
                )
                .catch(i.oe)
            })),
          a)
    }
    function o(t) {
      return new l(t)
    }
    var s, a, l
    Object.defineProperty(e, '__esModule', { value: !0 }),
      i.d(e, 'LazyJqueryUI', function() {
        return l
      }),
      (e.lazyJqueryUI = o),
      (s = i(14)),
      i.n(s),
      (l = (function() {
        function t(t) {
          this._$elem = t
        }
        return (
          (t.prototype.draggable = function() {
            var t = arguments,
              e = this._$elem
            return n('draggable').then(function() {
              return e.draggable.apply(e, t)
            })
          }),
          (t.prototype.resizable = function() {
            var t = arguments,
              e = this._$elem
            return n('resizable').then(function() {
              return e.resizable.apply(e, t)
            })
          }),
          (t.prototype.sortable = function() {
            var t = arguments,
              e = this._$elem
            return n('sortable').then(function() {
              return e.sortable.apply(e, t)
            })
          }),
          (t.prototype.datepicker = function() {
            var t = arguments,
              e = this._$elem
            return n('datepicker').then(function() {
              return e.datepicker.apply(e, t)
            })
          }),
          t
        )
      })())
  },
  836: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
  },
  845: function(t, e, i) {
    'use strict'
    function n(t) {
      var e,
        i,
        n = (t + '').match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
      return null === n
        ? 0
        : ((e = n[1] ? n[1].length : 0), (i = n[2] ? parseInt(n[2], 0) : 0), Math.max(0, e - i))
    }
    function o(t) {
      return (
        (t = Math.abs(t)),
        !Object(d.isInteger)(t) && t > 1 && (t = parseFloat(('' + t).replace(/^.+\./, '0.'))),
        0 < t && t < 1 ? Math.pow(10, n(t)) : 1
      )
    }
    function s(t, e) {
      var i, n, s, a, l, r
      t.trigger('tvticker-beforechange'),
        (i = t.data('TVTicker')),
        (n = i && i.step),
        (s = 0),
        (s = i.parser
          ? i.parser(t.val())
          : Object(d.isInteger)(n)
          ? parseInt(t.val(), 10)
          : parseFloat(t.val())),
        isNaN(s) && (s = 0),
        (a = o(n)),
        (l = Math.max(a, o(s))),
        (r = e(s, l)),
        i.formatter && (r = i.formatter(r)),
        t.val(r),
        t.change()
    }
    function a(t) {
      var e = t.data('TVTicker'),
        i = e && e.step,
        n = e && e.max
      s(t, function(t, e) {
        var o = (Math.round(t * e) + Math.round(i * e)) / e
        return void 0 !== n && null !== n && n < o && (o = t), o
      })
    }
    function l(t) {
      var e = t.data('TVTicker'),
        i = e && e.step,
        n = e && e.min
      s(t, function(t, e) {
        var o = (Math.round(t * e) - Math.round(i * e)) / e
        return void 0 !== n && null !== n && o < n && (o = t), o
      })
    }
    var r, c, d, u
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (r = i(14)),
      i.n(r),
      (c = i(314)),
      i.n(c),
      (d = i(12)),
      i.n(d),
      (u = i(836)),
      i.n(u),
      ($.fn.TVTicker = function(t) {
        return (
          void 0 === t && (t = {}),
          this.each(function() {
            var e,
              i,
              n,
              o = !1,
              s = $(this),
              r = s.data('TVTicker')
            r ? (o = !0) : (r = { step: +s.data('step') || 1 }),
              'step' in t && (r.step = +t.step || r.step),
              'min' in t && (r.min = t.min),
              'max' in t && (r.max = t.max),
              'formatter' in t && (r.formatter = t.formatter),
              'parser' in t && (r.parser = t.parser),
              s.data('TVTicker', r),
              o ||
                ((e = $('<div class="tv-ticker">').appendTo(s.parent())),
                (i = $('<div class="tv-ticker__btn tv-ticker__btn--up">')
                  .html(u)
                  .appendTo(e)),
                (n = $('<div class="tv-ticker__btn tv-ticker__btn--down">')
                  .html(u)
                  .appendTo(e)),
                e.on('mousedown', function(t) {
                  t.preventDefault(), s.focus()
                }),
                i.click(function() {
                  s.is(':disabled') || a(s)
                }),
                n.click(function() {
                  s.is(':disabled') || l(s)
                }),
                s.keydown(function(t) {
                  s.is(':disabled') ||
                    (38 === t.keyCode
                      ? i.addClass('i-active')
                      : 40 === t.keyCode && n.addClass('i-active'))
                }),
                s.keyup(function(t) {
                  s.is(':disabled') ||
                    (38 === t.keyCode
                      ? (a(s), i.removeClass('i-active'))
                      : 40 === t.keyCode && (l(s), n.removeClass('i-active')))
                }),
                s.mousewheel(function(t, e) {
                  e > 0 ? i.click() : n.click()
                }))
          })
        )
      })
  },
  851: function(t, e) {},
  883: function(t, e, i) {
    'use strict'
    ;(function(e, n) {
      var o,
        s = i(50).max,
        a = i(827).lazyJqueryUI
      i(845),
        (o = {
          modalDialog: null,
          dialogs: [],
          NOTIFICATION_ANIMATION_START_OFFSET: '-33px',
          _constrainDraggableOptionsIfNeeded: function(t) {
            return e.enabled('constraint_dialogs_movement') && (t.containment = '.chart-page'), t
          },
          showNotice: function(t, e, i) {
            var s, a, l, r, c, d
            return (
              'object' == typeof e && ((i = e), (e = '')),
              (i = i || {}),
              (s = i.doNotCloseOnBgClick || !1),
              (a = i.html || ''),
              (l = i.width || '400px'),
              (r = {}),
              (r.noClose = i.noClose || null),
              (r.addClass = i.modalDialogClass || null),
              o.createModalDialog(t, r),
              (c = i.centerCaption ? 'caption-big-center' : 'caption-big'),
              o.modalDialog.find('._tv-dialog').css('width', l),
              (d = i.customButtonCaption ? i.customButtonCaption : $.t('OK')),
              o.modalDialog
                .find('._tv-dialog-content')
                .html(
                  n.render(
                    '<div class="main"><div class="{{captionClassName}} {{classSuffix}}">{{text}}' +
                      a +
                      '</div>{{^removeOkButton}}<div class="buttons"><input type="button" class="_tv-button ok" value="' +
                      d +
                      '"/></div>{{/removeOkButton}}</div>',
                    {
                      captionClassName: c,
                      classSuffix: i.classSuffix || '',
                      text: e,
                      removeOkButton: i && i.removeOkButton,
                    },
                  ),
                ),
              o.modalDialog.find('._tv-button.ok').on('click', function() {
                o.destroy(), i.onOkButtonClick && i.onOkButtonClick()
              }),
              o.positionDialog(),
              o.applyHandlers(!1, { doNotCloseOnBgClickIfShadowbox: s, beforeDestroy: i.onClose }),
              o.modalDialog
            )
          },
          showCustomDialog: function(t) {
            function e(t) {
              o.destroy(), t.preventDefault()
            }
            return (
              o.createModalDialog(t.title || $.t('Dialog'), { addClass: '' }),
              o.modalDialog.find('._tv-dialog').css('width', t.width || '400px'),
              o.modalDialog
                .find('._tv-dialog-content')
                .html('<div class="main">' + (t.html || $.t('Content')) + '</div>'),
              o.modalDialog.find('.ok').click(e),
              o.modalDialog.find('form').submit(e),
              o.modalDialog.find('.cancel').click(e),
              o.modalDialog.find('._tv-dialog-title-close').click(e),
              o.positionDialog(),
              o.applyHandlers(),
              o.modalDialog
            )
          },
          createModalDialog: function(t, e) {
            var i, n
            return (
              (e = e || {}),
              null !== o.modalDialog && o.destroy(),
              (o.modalDialog = $(
                '<div class="_tv-dialog-shadowbox"><div class="_tv-dialog _tv-dialog-modal' +
                  (e.addClass ? ' ' + e.addClass : '') +
                  '">' +
                  (e.noHeader
                    ? ''
                    : '<div class="_tv-dialog-title">' +
                      (e.noClose ? '' : '<a class="_tv-dialog-title-close"></a>') +
                      '<span class="_tv-dialog-title-text">' +
                      t +
                      '</span></div>') +
                  '<div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div></div>',
              )
                .appendTo($('body'))
                .data('title', t)),
              o._addMessageCloseButton(o.modalDialog.find('._tv-dialog-error')),
              o._addMessageCloseButton(o.modalDialog.find('._tv-dialog-message')),
              e.noShadowBox && o.modalDialog.addClass('transparent'),
              e.addClass && o.modalDialog.addClass(e.addClass),
              e.width && o.modalDialog.find('._tv-dialog').css({ width: e.width }),
              e.content && o.modalDialog.find('._tv-dialog-content').html(e.content),
              (i = $('.fancybox-overlay')),
              i.length &&
                ((n = i.css('z-index')), $('._tv-dialog-shadowbox').css('z-index', n + 1)),
              e.draggable &&
                a(o.modalDialog).draggable(
                  o._constrainDraggableOptionsIfNeeded({
                    handle: o.modalDialog.find('._tv-dialog-title'),
                  }),
                ),
              e.zIndex && o.modalDialog.css('z-index', e.zIndex),
              o.modalDialog
            )
          },
          _addMessageCloseButton: function(t) {
            var e = $(i(884)).attr({ class: 'close', title: $.t('Close message') })
            t.append(e),
              $(e).on('click', function() {
                t.animate(
                  { marginTop: o.NOTIFICATION_ANIMATION_START_OFFSET, opacity: 0 },
                  'fast',
                  function() {
                    t.hide()
                  },
                )
              })
          },
          createDialog: function(t, e) {
            var i, l, r, c
            return o.isOpen(t)
              ? ((i = o.get(t)), i.find('._tv-dialog-content').html(''), i.data('new', !1), i)
              : ((e = e || {}),
                (l = e.ownerDocument || document),
                (i = $(
                  n.render(
                    '<div class="_tv-dialog _tv-dialog-nonmodal {{&addClass}}"><div class="_tv-dialog-title{{#hideTitle}} _tv-dialog-title-hidden{{/hideTitle}}{{#hideCloseCross}} _tv-dialog-title-no-close{{/hideCloseCross}}">{{^hideTitle}} {{&title}}{{/hideTitle}}{{^hideCloseCross}}<a class="_tv-dialog-title-close"></a>{{/hideCloseCross}}</div><div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div>',
                    {
                      addClass: e.addClass || '',
                      hideTitle: e.hideTitle,
                      hideCloseCross: e.hideCloseCross,
                      title: t,
                    },
                  ),
                  l,
                ).appendTo(l.body)),
                o._addMessageCloseButton(i.find('._tv-dialog-error')),
                o._addMessageCloseButton(i.find('._tv-dialog-message')),
                e.width && i.css({ width: e.width }),
                e.content && i.find('._tv-dialog-content').html(e.content),
                (r = 0),
                (r = e.zIndex
                  ? e.zIndex
                  : o.dialogs && o.dialogs.length
                  ? s(
                      $.map(o.dialogs, function(t) {
                        return parseInt((t.dialog || t).css('z-index'), 10)
                      }),
                    ) + 1
                  : 110),
                i.css('z-index', r),
                i.data('new', !0),
                i.data('title', t),
                i.data('id', o.dialogs.length + 1),
                o.dialogs.push({ title: t, dialog: i, id: o.dialogs.length + 1 }),
                (c = {
                  start: function(t, e) {
                    var i,
                      n,
                      s = e.helper.css('z-index'),
                      a = 0,
                      l = null
                    for (i = 0; i < o.dialogs.length; i++)
                      (n = o.dialogs[i].dialog.css('z-index')) > a &&
                        ((a = n), (l = o.dialogs[i].dialog))
                    e.helper.css('z-index', a), l.css('z-index', s)
                  },
                }),
                e.dragHandle
                  ? (c.handle = e.dragHandle)
                  : e.hideTitle || (c.handle = '._tv-dialog-title'),
                e.dragOptions && $.extend(c, e.dragOptions),
                a(i).draggable(o._constrainDraggableOptionsIfNeeded(c)),
                i)
          },
          positionDialog: function(t, e, i) {
            function n() {
              s.css('margin-left', -Math.round(s.outerWidth() / 2) + 'px'),
                s.css('margin-top', -Math.round(s.outerHeight() / 2) + 'px')
            }
            var s, a, l, r, c, d, u, p, h, g
            ;(i = i || {}),
              (e = e || i.position),
              t
                ? ((a = t.prop('ownerDocument')),
                  (l = a.defaultView),
                  (r = t.width()),
                  (c = t.height()),
                  (d = $(l).width()),
                  (u = $(l).height()),
                  e && e.top && e.left
                    ? ((h = i.forcePosition
                        ? e.left
                        : Math.max(2, Math.min(d - r - 4, e.left)) + 'px'),
                      (p = i.forcePosition
                        ? e.top
                        : Math.max(2, Math.min(u - c - 4, e.top)) + 'px'))
                    : e && e.considerScroll
                    ? ((g = $(a)),
                      (h = Math.round((d - r) / 2 + g.scrollLeft()) + 'px'),
                      (p = Math.round((u - c) / 2 + g.scrollTop()) + 'px'))
                    : ((h = Math.round((d - r) / 2) + 'px'), (p = Math.round((u - c) / 2) + 'px')),
                  i.fadeIn
                    ? t
                        .css({ left: h, top: p })
                        .hide()
                        .fadeIn('fast')
                    : i.smooth
                    ? t.animate({ left: h, top: p })
                    : t.css({ left: h, top: p }))
                : ((t = o.modalDialog), (s = t.find('._tv-dialog')), n(), s.resize(n))
          },
          applyHandlers: function(t, e) {
            var i,
              n,
              s,
              a = !t || t === this.modalDialog
            ;(e = e || {}),
              (i = a
                ? function() {
                    o.destroy()
                  }
                : function() {
                    o.destroy(t.data('title'))
                  }),
              (t = t || o.modalDialog.find('._tv-dialog')),
              (n = t.prop('ownerDocument')),
              e.beforeDestroy && t.on('destroy', e.beforeDestroy),
              t
                .find('._tv-dialog-title ._tv-dialog-title-close, .js-dialog-close')
                .on('click', function(t) {
                  e.closeHandler && 'function' == typeof e.closeHandler ? e.closeHandler(t) : i()
                }),
              e.doNotCloseOnBgClick ||
                setTimeout(function() {
                  $(n).on('mousedown.closeDialog', function(o) {
                    var s = $(o.target)
                      .parents()
                      .andSelf()
                    s.is(t) ||
                      (e.doNotCloseOnBgClickIfShadowbox &&
                        s.is('._tv-dialog-shadowbox, .tv-dialog__modal-wrap')) ||
                      s.is(
                        '.colorpicker, .charts-popup-list, ._tv-dialog, .tvcolorpicker-popup, .symbol-edit-popup, .ui-datepicker, .clockpicker-popover, .pac-container',
                      ) ||
                      ($(n).off('mousedown.closeDialog'), i())
                  })
                }, 0),
              t.find('input[type="checkbox"]').change(function() {
                var t = $(this)
                t.next('._tv-dialog-checkbox-mask')
                  .toggleClass('disabled', t.prop('disabled'))
                  .toggleClass('_tv-dialog-checkbox-mask-active', t.is(':checked'))
              }),
              (s = t
                .find('input[type="text"]')
                .focus(function() {
                  $(this).addClass('_tv-dialog-content-textactive')
                })
                .blur(function() {
                  $(this).removeClass('_tv-dialog-content-textactive')
                })
                .first()),
              Modernizr.touch || e.notFocusFirst || s.focus(),
              t
                .find('input[type="password"]')
                .focus(function() {
                  $(this).addClass('_tv-dialog-content-textactive')
                })
                .blur(function() {
                  $(this).removeClass('_tv-dialog-content-textactive')
                }),
              t
                .find('textarea')
                .focus(function() {
                  $(this).addClass('_tv-dialog-content-textareaactive')
                })
                .blur(function() {
                  $(this).removeClass('_tv-dialog-content-textareaactive')
                }),
              t.find('._tv-dialog-checkbox-mask').click(function() {
                var t = $(this).prev()
                t.prop('disabled') || (t.prop('checked', !t[0].checked), t.change())
              }),
              e.doNotCloseOnEsc ||
                $(n).bind('keyup.hideDialog', function(e) {
                  if (27 === e.keyCode) return t ? o.destroy(t.data('title')) : o.destroy(), !1
                }),
              e.processEnterButton &&
                $(n).bind('keyup.confirmAndCloseDialog', function(t) {
                  13 === t.keyCode &&
                    'textarea' !== t.target.tagName.toLowerCase() &&
                    (e.processEnterButton.click(), $(n).unbind('keyup.confirmAndCloseDialog'))
                })
          },
          showError: function(t, e, i) {
            o.showMessage(t, e, $.extend(i || {}, { isError: !0 }))
          },
          showMessage: function(t, e, i) {
            var n, s, a
            e || (e = $('._tv-dialog')),
              (i = i || {}),
              (n = (i.isError && '_tv-dialog-error') || '_tv-dialog-message'),
              (s = e.find('.' + n)),
              (a = s.find('.message')),
              i.html ? a.html('string' == typeof i.html ? i.html : t) : a.text(t),
              a.css('width', e.width()).toggleClass('selectable', !!i.selectable),
              s
                .toggleClass('with-close', !!i.withClose)
                .css({ marginTop: o.NOTIFICATION_ANIMATION_START_OFFSET, opacity: '0' })
                .show()
                .animate({ marginTop: 0, opacity: 1 }, 'fast'),
              i.withClose ||
                (i.hideWithoutAnimation
                  ? s.on('touchstartoutside mousedownoutside keydownoutside', function t() {
                      s.hide(), s.off('touchstartoutside mousedownoutside keydownoutside', t)
                    })
                  : s.on('touchstartoutside mousedownoutside keydownoutside', function t() {
                      s.animate(
                        { marginTop: o.NOTIFICATION_ANIMATION_START_OFFSET, opacity: 0 },
                        'fast',
                        function() {
                          s.hide()
                        },
                      ),
                        s.off('touchstartoutside mousedownoutside keydownoutside', t)
                    }))
          },
          isOpen: function(t) {
            for (var e = 0; e < o.dialogs.length; e++) if (o.dialogs[e].title === t) return !0
            return !1
          },
          get: function(t) {
            for (var e = 0; e < o.dialogs.length; e++)
              if (o.dialogs[e].title === t) return o.dialogs[e].dialog
          },
          destroy: function(t, e) {
            var i,
              n = null
            if (t && 'string' == typeof t)
              for (i = 0; i < o.dialogs.length; i++)
                o.dialogs[i].title === t &&
                  ((n = o.dialogs[i].dialog.prop('ownerDocument')),
                  o.dialogs[i].dialog.find('.apply-common-tooltip').mouseout(),
                  o.dialogs[i].dialog.trigger('destroy', e),
                  $(document).unbind('mouseup.hideDialog' + o.dialogs[i].id),
                  $('input', o.dialogs[i].dialog).blur(),
                  o.dialogs[i].dialog.remove(),
                  o.dialogs.splice(i, 1))
            else
              o.modalDialog &&
                ((n = o.modalDialog.prop('ownerDocument')),
                o.modalDialog.find('.apply-common-tooltip').mouseout(),
                o.modalDialog.find('._tv-dialog').trigger('destroy'),
                o.modalDialog.remove(),
                (o.modalDialog = null))
            $(n).unbind('keyup.hideDialog'), $(n).unbind('keyup.confirmAndCloseDialog')
          },
          resizeContent: function(t, e, i) {
            var n, o
            null == i && (i = 20),
              (t += i),
              (n = parseInt($('body').height(), 10)),
              (o = e.height()),
              t > n && ((o -= t - n), (o = Math.max(0, o)), e.height(o))
          },
        }),
        (t.exports.TVOldDialogs = o)
    }.call(e, i(5), i(126)))
  },
  884: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9px" height="9px"><path d="M2 1L1 2l2.5 2.5L1 7l1 1 2.5-2.5L7 8l1-1-2.5-2.5L8 2 7 1 4.5 3.5z"/></svg>'
  },
})
