webpackJsonp([15, 2], {
  1010: function(t, e, i) {
    'use strict'
    function s(t, e, i) {
      e.toggleClass('i-hidden', '' === t.val()), i.fire(t.val())
    }
    function o(t) {
      var e,
        i,
        o,
        n = $(h)
      return (
        t.addClass && n.addClass(t.addClass),
        t.withoutControls && n.addClass('tv-search-row--without-controls'),
        (e = n.find('.js-input-control')),
        (i = n.find('.js-reset-button')),
        t.placeholder && e.attr('placeholder', t.placeholder),
        i[0].addEventListener('click', function() {
          e.val('')
            .trigger('input')
            .focus()
        }),
        (o = new r.a()),
        e.on('input propertychange', s.bind(null, e, i, o)),
        s(e, i, o),
        { $control: n, $input: e, inputChangedDelegate: o }
      )
    }
    var n, r, a, l, c, h
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createSearchControl = o),
      (n = i(8)),
      (r = i.n(n)),
      (a = i(325)),
      i.n(a),
      (l = i(1011)),
      i.n(l),
      (c = i(1012)),
      i.n(c),
      (h =
        '<div class="tv-search-row"><input class="tv-search-row__input js-input-control" type="text" name="q" value="" autocomplete="off"><span class="tv-search-row__input-reset i-hidden js-reset-button">' +
        a +
        '</span><span class="tv-search-row__search-icon">' +
        l +
        '</span></div>')
  },
  1011: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18px" height="18px"><path fill-rule="evenodd" d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"/></svg>'
  },
  1012: function(t, e) {},
  1013: function(t, e, i) {
    'use strict'
    function s(t) {
      return t && t.__esModule ? t : { default: t }
    }
    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    function n(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
    }
    function r(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
      ;(t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
    }
    var a, l
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.AddSymbolCheckbox = void 0),
      (a = i(308)),
      (l = s(a)),
      (e.AddSymbolCheckbox = (function(t) {
        function e(t) {
          o(this, e), (t.checked = TVSettings.getBool('showAddSymbolDialog.checkboxState', !0))
          var i = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
          return (
            i.$checkbox.change(function() {
              setTimeout(function() {
                TVSettings.setValue('showAddSymbolDialog.checkboxState', i.checked)
              })
            }),
            i
          )
        }
        return r(e, t), e
      })(l.default))
  },
  1103: function(t, e, i) {
    'use strict'
    var s, o, n, r, a, l, c, h, d, u
    Object.defineProperty(e, '__esModule', { value: !0 }),
      i.d(e, 'FavoriteScriptsModel', function() {
        return u
      }),
      (s = i(49)),
      i.n(s),
      (o = i(107)),
      (n = i(26)),
      (r = i.n(n)),
      (a = i(8)),
      (l = i.n(a)),
      (c = i(12)),
      i.n(c),
      (h = { FAV_KEY: 'studyMarket.favorites', FAV_EXTRA_KEY: 'studyMarket.favorites.extra' }),
      (d = null),
      (u = (function() {
        function t() {
          var t = this
          ;(this._previousFavorites = []),
            (this._favorites = []),
            (this._favoritesExtra = {}),
            (this._favoritesChanged = new l.a()),
            this.loadFavs(),
            o.TVXWindowEvents.on('StudyFavoritesChanged', function(e) {
              var i = JSON.parse(e)
              t._updateFavorites(i.favorites || []), t._updateFavoritesExtra(i.favoritesExtra || {})
            }),
            window.loginStateChange.subscribe(null, function() {
              t.loadFavs()
            })
        }
        return (
          (t.prototype.loadFavs = function() {
            var t = s.getJSON(h.FAV_KEY, []),
              e = s.getJSON(h.FAV_EXTRA_KEY, {}),
              i = this._migrate(t, e)
            this._updateFavorites(i.favs), this._updateFavoritesExtra(i.favsExtra)
          }),
          (t.prototype.isFav = function(t) {
            0 === this._favorites.length && this.loadFavs()
            var e = this.favId(t)
            return -1 !== this._favorites.indexOf(e)
          }),
          (t.prototype.favorite = function(t, e) {
            var i, s, n, r
            ;(0 !== this._favorites.length && 0 !== Object.keys(this._favoritesExtra).length) ||
              this.loadFavs(),
              (i = this.favId(t)),
              (s = this.favorites()),
              (n = this.favoritesExtra()),
              (r = s.indexOf(i)),
              -1 !== r ? (s.splice(r, 1), delete n[i]) : (s.push(i), void 0 !== e && (n[i] = e)),
              this._updateFavorites(s),
              this._updateFavoritesExtra(n),
              this._saveFavs(s, n),
              o.TVXWindowEvents.emit(
                'StudyFavoritesChanged',
                JSON.stringify({ favorites: s, favoritesExtra: n }),
              )
          }),
          (t.prototype.favId = function(t) {
            return r.a.cutScriptIdPart(t) || r.a.cutFullId(t)
          }),
          (t.prototype.previousFavorites = function() {
            return this._previousFavorites.slice()
          }),
          (t.prototype.favorites = function() {
            return this._favorites.slice()
          }),
          (t.prototype.favoritesExtra = function() {
            return Object.assign({}, this._favoritesExtra)
          }),
          (t.prototype.favoritesChanged = function() {
            return this._favoritesChanged
          }),
          (t.getInstance = function() {
            return null === d && (d = new t()), d
          }),
          (t.prototype._saveFavs = function(t, e) {
            s.setJSON(h.FAV_KEY, t), s.setJSON(h.FAV_EXTRA_KEY, e)
          }),
          (t.prototype._migrate = function(t, e) {
            var i,
              s,
              o = [],
              n = {}
            for (i = 0; i < t.length; i++)
              (s = this.favId(t[i])), -1 === o.indexOf(s) && (o.push(s), (n[s] = e[t[i]]))
            return { favs: o, favsExtra: n }
          }),
          (t.prototype._updateFavorites = function(t) {
            Object(c.deepEquals)(this._favorites, t)[0] ||
              ((this._previousFavorites = this.favorites()),
              (this._favorites = t),
              this._favoritesChanged.fire(this.favorites()))
          }),
          (t.prototype._updateFavoritesExtra = function(t) {
            this._favoritesExtra = t
          }),
          t
        )
      })())
  },
  1104: function(t, e) {},
  188: function(t, e, i) {
    'use strict'
    function s(t) {
      var e = t.type || 'popup'
      return delete t.type, 'modal' === e ? new o.TVModal(t) : new n.TVPopup(t)
    }
    var o, n
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (o = i(837)),
      (n = i(843)),
      (e.createDialog = s)
  },
  690: function(t, e, i) {
    'use strict'
    var s
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (s = i(839)),
      i.n(s),
      i.o(s, 'TVDialogAbstract') &&
        i.d(e, 'TVDialogAbstract', function() {
          return s.TVDialogAbstract
        }),
      i.o(s, 'closeAllDialogs') &&
        i.d(e, 'closeAllDialogs', function() {
          return s.closeAllDialogs
        })
  },
  702: function(t, e, i) {
    'use strict'
    ;(function(e, s) {
      function o(t, i) {
        ;(this.HIGHLIGHT_STUDY_NUM_FLICKS = 2),
          (this.SCROLL_TOLERANCE = 10),
          (this._BASIC_STUDIES_PACKAGE_NAME = 'tv-basicstudies'),
          (this._CUSTOM_STUDIES_PACKAGE_NAME = 'Script$USER'),
          (this._PUBLISHED_STUDIES_PACKAGE_NAME = 'Script$PUB'),
          (this._STANDARD_STUDIES_PACKAGE_NAME = 'Script$STD'),
          (this._SCRIPTING_PACKAGE_NAME = 'tv-scripting'),
          (this._FUNDAMENTAL_PACKAGE_NAME = 'Script$EDGR'),
          (this._BASIC_STUDIES_PAGE_NAME = r.enabled('plain_studymarket')
            ? $.t('Technical Analysis')
            : $.t('Built-ins')),
          (this._FUNDAMENTALS_PAGE_NAME = $.t('Fundamentals')),
          (this._dialog = null),
          (this._selectedStudy = null),
          (this._keyDownListener = null),
          (this._shortCutsLockId = null),
          (this.visibilityChanged = new e()),
          (this._chartWidgetCollection = t),
          (this._chart = t.activeChartWidget.value()),
          (this._options = $.extend({}, this.DEFAULT_OPTIONS, i || {})),
          this.concretizeOptions(),
          (this._user = window.user),
          this.setup(),
          (this.favsModel = w.getInstance()),
          this.favsModel.favoritesChanged().subscribe(this, this.updateFavorites)
      }
      var n, r, a, l, c, h, d, u, p, _, g, f, v, y, b, m, S, C, w, T, E, A, P, k
      i(208),
        (n = i(106).isFeatureEnabled),
        (r = i(5)),
        (a = i(7).assert),
        (l = i(31)),
        (c = i(833).SidebarCustomScroll),
        (h = i(26)),
        (d = i(188).createDialog),
        i(82).createConfirmDialog,
        (u = i(209).showNoticeDialog),
        (p = i(1010).createSearchControl),
        (_ = i(184)),
        (g = i(49)),
        (f = i(832)),
        (v = i(128).bindToInput),
        (y = i(1013).AddSymbolCheckbox),
        (b = i(307)),
        (m = i(192)),
        (S = i(338).KeyboardListener),
        (C = i(189)),
        (w = i(1103).FavoriteScriptsModel),
        (T = i(4).getLogger('Chart.StudyMarketDialog')),
        i(1104),
        i(834),
        i(876),
        (E =
          '<div class="tv-insert-indicator-dialog__body js-dialog__scroll-wrap"><div class="tv-insert-indicator-dialog__left-panel">{{^minimized}}<div id="js-search-placeholder"></div>{{/minimized}}<div class="tv-insert-indicator-dialog__left-panel-content-wrapper js-left-panel-wrapper"><div class="tv-insert-indicator-dialog__tabs-viewport js-tabs-viewport"><div class="tv-insert-indicator-dialog__tabs-container js-tabs-container"></div></div></div></div><div class="tv-insert-indicator-dialog__right-panel js-right-panel">{{#minimized}}{{#withSearch}}<div id="js-search-placeholder"></div>{{/withSearch}}{{/minimized}}<div class="tv-insert-indicator-dialog__pages js-pages"></div></div></div>'),
        (A =
          '<div class="tv-insert-indicator-dialog__tabs-group"><div class="tv-insert-indicator-dialog__tab tv-insert-indicator-dialog__tab--group-head js-tab js-tab-head">{{title}}<span class="tv-caret"></span></div><div class="tv-insert-indicator-dialog__tabs"></div></div>'),
        (P =
          '<div class="js-study-item tv-insert-study-item {{^withFavorites}}i-without-stars{{/withFavorites}}">{{#withFavorites}}<div class="tv-insert-study-item__favorite-icon js-favorite-icon"><span class="tv-insert-study-item__star tv-insert-study-item__star--filled">' +
          i(869) +
          '</span><span class="tv-insert-study-item__star tv-insert-study-item__star--empty">' +
          i(870) +
          '</span></div>{{/withFavorites}}<div class="tv-insert-study-item__title"><div class="tv-insert-study-item__title-text" title="{{titleTooltip}}">{{{title}}}</div></div></div>'),
        (k = !TradingView.onWidget() && n('hide_fundamentals')),
        (o.prototype.destroy = function() {}),
        (o.prototype.setup = function() {
          ;(this._initialized = !1),
            (this._loadMore = null),
            (this._$economyTabInput = null),
            (this._$symbolSearchPopup = null),
            (this._market = null),
            (this._studies = null),
            (this._packagesWithTabNames = {}),
            (this._pages = {}),
            (this._tabs = {}),
            (this._subProductIds = {}),
            (this.favsChanged = new e()),
            (this._previousInviteOnlyStudiesIds = []),
            (this.studiesReady = new $.Deferred()),
            (this.marketPagesReady = new $.Deferred()),
            (this._pubSearchCount = [0, 0, 0]),
            (this._pubSearchCanLoad = [!0, !0, !0]),
            (this._pubSearchEntries = []),
            (this._pubSearchCache = []),
            (this._pubSearchDfd = null),
            (this._pubSearchPageShown = !1),
            (this._w_market_tabs = null),
            (this._w_technical_tabs = null)
        }),
        (o.prototype.init = function() {
          if (this._initialized) return void this.getStudyInfo()
          this.setupMarketInfo(),
            this.getStudyInfo(),
            this.setUser(this._user),
            this.prepareLayout(),
            this.attachHandlers(),
            (this._initialized = !0)
        }),
        (o.prototype.DEFAULT_OPTIONS = {
          onWidget: !1,
          hideMarketPages: !1,
          selectBasicPage: !0,
          minimized: !1,
          searchKeywords: {
            earning: RegExp('EPS'),
            earnings: RegExp('EPS'),
            'trailing twelve months': RegExp('TTM'),
          },
        }),
        (o.prototype._PAGE_KEY = 'studyMarket.page'),
        (o.prototype._ECONOMY_TAB = $.t('Economy & Symbols')),
        (o.prototype._PUB_SEARCH_ENTRIES_ON_PAGE = 20),
        (o.prototype.loadFavorites = function() {
          this.favsModel.loadFavs()
        }),
        (o.prototype.concretizeOptions = function() {
          r.enabled('study_market_minimized') &&
            ((this._options.hideMarketPages = !0),
            (this._options.selectBasicPage = !0),
            (this._options.minimized = !0)),
            this._options.onWidget && (this._options.hideMarketPages = !0)
        }),
        (o.prototype.setupMarketInfo = function() {}),
        (o.prototype.getStudyInfo = function() {
          this._chart.withModel(this, function() {
            this.setupStudyInfo()
          })
        }),
        (o.prototype.setupStudyInfo = function() {
          var t = this._chartWidgetCollection.activeChartWidget
            .value()
            .model()
            .studiesMetaData()
          t.length
          ;(this._studies = {}),
            (t = t.filter(function(t) {
              return !this.isHidedStudy(t)
            }, this)),
            t.forEach(
              function(t) {
                var e,
                  i = this.getStudyPackageName(t.id)
                !(
                  (this._options.minimized && i !== this._BASIC_STUDIES_PACKAGE_NAME) ||
                  (this._options.onWidget &&
                    (h.isScriptStrategy(t) || i === this._CUSTOM_STUDIES_PACKAGE_NAME))
                ) &&
                  ((e = this.resolvePackageName(i)),
                  a(void 0 !== e, 'Cannot resolve packageName ' + i),
                  (this._studies[e] = this._studies[e] || []),
                  this._studies[e].push(t))
              }.bind(this),
              this,
            ),
            this.studiesReady.resolve()
        }),
        (o.prototype.setupAddonsInfo = function() {
          var t,
            e,
            i,
            s,
            o,
            n = [],
            r = {}
          for (t in this._market.products)
            (e = this._market.products[t]),
              pro.hasPackage(t) &&
                e.subproduct_ids &&
                e.subproduct_ids[0] &&
                ((i = e.subproduct_ids[0]),
                (s = i.split('$')[1]),
                (r[s] = t),
                n.push(ScriptLib.requestPineAddons(s)))
          return (
            (o = this),
            Promise.all(n).then(function(t) {
              return t.reduce(function(t, e) {
                var i, s
                return e && e.length
                  ? ((i = e[0].scriptIdPart.split('_')[0]),
                    (s = []),
                    o._fillScriptsMetainfo(e, s),
                    (t[r[i]] = s),
                    t)
                  : t
              }, {})
            })
          )
        }),
        (o.prototype.resolvePackageName = function(t) {
          return t in this._subProductIds ? this._subProductIds[t] : t
        }),
        (o.prototype.setUser = function(t) {
          window.is_authenticated ? this.setupUserData(t) : this.setAnonymous()
        }),
        (o.prototype.setupUserData = function(t) {
          ;(this._user = t), this.loadFavorites(), this.updateMarketPages()
        }),
        (o.prototype.setAnonymous = function() {
          this.setupUserData(null), this.favsChanged.fire()
        }),
        (o.prototype.isHidedStudy = function(t) {
          var e, i, s
          return (
            this._options.onWidget && (e = 'IchimokuCloud@tv-basicstudies' === t.id),
            (i = !1),
            (s = !1),
            (!!t.is_hidden_study && !e) || (i && !s)
          )
        }),
        (o._breakpointDevice = 'phone-vertical'),
        (o.prototype._switchPagesContainer = function(t, e) {
          this._options.minimized ||
            (t === o._breakpointDevice
              ? this._w_pages.detach().appendTo(this._widget.find('.js-left-panel-wrapper'))
              : e === o._breakpointDevice &&
                this._w_pages.detach().appendTo(this._widget.find('.js-right-panel')))
        }),
        (o.prototype.prepareLayout = function() {
          ;(this._widget = $(
            s.render(E, {
              withSearch: r.enabled('study_dialog_search_control'),
              minimized: this._options.minimized,
            }),
          )),
            (this._w_tabs = this._widget.find('.js-tabs-container')),
            (this._w_pages = this._widget.find('.js-pages')),
            (this._loadMore = null),
            this.preparePages(),
            !this._options.selectBasicPage ||
            this._options.fundamentalsOnly ||
            (f.device === o._breakpointDevice && !this._options.minimized)
              ? this._options.fundamentalsOnly &&
                (f.device !== o._breakpointDevice || this._options.minimized)
                ? this.selectPage(this._FUNDAMENTALS_PAGE_NAME)
                : f.device === o._breakpointDevice && this.selectPage('')
              : this.selectPage(this._BASIC_STUDIES_PAGE_NAME),
            (this._scroll = new c(this._widget.find('.js-tabs-viewport'), this._w_tabs, {
              showBottomShadow: !1,
            }))
          var t =
            '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag tv-insert-indicator-dialog__title-container js-title-container"><div class="tv-insert-indicator-dialog__back-button js-back-button js-dialog__no-drag">' +
            i(873) +
            '</div><div class="js-title-text tv-dialog__title tv-insert-indicator-dialog__title-text">{{{ title }}}</div></div>'
          ;(this._dialog = d({
            title: ' ',
            titleTemplate: t,
            contentWrapTemplate: this._widget,
            addClass:
              'tv-insert-indicator-dialog ' + (this._options.minimized ? 'i-minimized' : ''),
            width: this._options.minimized ? 490 : 842,
            height: 580,
            withScroll: !1,
            focusFirstControl: !1,
            closeOnClickAtOtherDialogs: !1,
            isClickOutFn: function(t) {
              var e,
                s = i.c[695]
              if (s && (e = s.exports.instance())) return e.isEventOut(t)
              if (this._$symbolSearchPopup)
                return (
                  this._$symbolSearchPopup[0] !== t.target &&
                  !this._$symbolSearchPopup[0].contains(t.target) &&
                  void 0
                )
            }.bind(this),
          })),
            this._dialog.on('afterClose', this._onDialogClosed.bind(this)),
            this._dialog.$title
              .find('.js-back-button')
              .on(Modernizr.touch ? 'touchend' : 'click', this.selectPage.bind(this, '')),
            f.on(
              'changeDevice',
              function(t, e) {
                t === o._breakpointDevice &&
                  this.currentPage() &&
                  this.currentPage().hasClass('js-marketplace-page') &&
                  this.selectPage(''),
                  t === o._breakpointDevice &&
                    (this._scroll.scrollToStart(), this._updateDialogTitleText()),
                  this._switchPagesContainer(t, e)
              }.bind(this),
            ),
            this._switchPagesContainer(f.device, ''),
            this._showHideBackButton(),
            this.hide()
        }),
        (o.prototype.scrollHandler = function() {
          var t, e
          if (!this._loadMore) return void this._w_pages.off('scroll.loadMoreOnEnd')
          ;(t = $.map(this._w_pages.children(':visible'), function(t) {
            return $(t).outerHeight(!0)
          }).reduce(function(t, e) {
            return t + e
          }, 0)),
            (e = this._widget.find('.js-right-panel').height()),
            this._w_pages.scrollTop() > t - e - this.SCROLL_TOLERANCE &&
              (this._w_pages.off('scroll.loadMoreOnEnd'), this._loadMore())
        }),
        (o.prototype._updateDialogTitleText = function() {
          var t, e, i
          if (this._dialog) {
            if (
              ((t = '' !== this._currentPageTitle),
              (e = f.device !== o._breakpointDevice),
              !t || e || this._options.minimized)
            )
              return void this._dialog.setTitleText(this._dialogTitleText)
            ;(i = this.currentPage()), this._dialog.setTitleText(i.data('fullTitle'))
          }
        }),
        (o.prototype.currentPage = function() {
          return this._pages[this._currentPageTitle]
        }),
        (o.prototype.preparePages = function() {
          this.addSearchPage(),
            r.enabled('items_favoriting') && this.addFavoritesPage(),
            this._options.fundamentalsOnly || this.prepareBasicPage(),
            this._options.fundamentalsOnly || this.addEconomyPage()
        }),
        (o.prototype.addEconomyPage = function() {
          var t,
            e,
            i = this.addPage(this._ECONOMY_TAB, { withoutTopPadding: !0, noFlex: !0 }),
            s = p({
              withoutControls: !0,
              placeholder: $.t('Symbol'),
              addClass: 'tv-insert-indicator-dialog__economy',
            })
          ;(this._$economyTabInput = s.$input),
            (t = new y({ labelRight: $.t('Overlay the main chart') })),
            (this._symbolSearch = v(this._$economyTabInput, {
              keepFocus: !0,
              clearAfterAccept: !0,
              callback: function(e) {
                var i = this._chartWidgetCollection.activeChartWidget.value()
                i && i.addSymbol(e, t.checked)
              }.bind(this),
              onPopupOpen: function(t) {
                ;(this._$symbolSearchPopup = t),
                  this._$symbolSearchPopup.css('z-index', this._dialog.zIndex)
              }.bind(this),
              onPopupClose: function() {
                this._$symbolSearchPopup = null
              }.bind(this),
            })),
            i.append(s.$control),
            (e = $('<div class="tv-insert-indicator-dialog__economy-content">')),
            e.append(t.$el),
            i.append(e)
        }),
        (o.prototype.addFavoritesPage = function() {
          this.addPage('Favorites', { localizedTitle: $.t('Favorites') }),
            this.loadFavorites(),
            this.updateFavorites()
        }),
        (o.prototype.addInvitesOnlyPage = function() {
          this.addPage('invitesOnly', { localizedTitle: $.t('Invite-Only Scripts') })
        }),
        (o.prototype.prepareBasicPage = function() {
          var t = this.addPage(this._BASIC_STUDIES_PAGE_NAME, {
            packageName: this._BASIC_STUDIES_PACKAGE_NAME,
            technical: !r.enabled('plain_studymarket'),
          })
          ;(this._basicPage = t),
            this.studiesReady.done(
              function() {
                this.resetBasicPage()
              }.bind(this),
            )
        }),
        (o.prototype._applyGlobalFilter = function(t) {
          return this._parentSource && (t = t.filter(h.canBeChild)), t
        }),
        (o.prototype._applyStrategiesFilter = function(t) {
          var e = this._parentSource ? 'not_strategies' : 'none'
          return (
            ('not_strategies' !== e && 'only_strategies' !== e) ||
              (t = t.filter(function(t) {
                var i = h.isScriptStrategy(t)
                return 'not_strategies' === e ? !i : i
              })),
            t
          )
        }),
        (o.prototype.resetBasicPage = function() {
          var t,
            e,
            i = this.getPage(this._BASIC_STUDIES_PAGE_NAME)
          this._studies &&
            ((t = this._studies[this._BASIC_STUDIES_PACKAGE_NAME] || []),
            (e = this._studies[this._STANDARD_STUDIES_PACKAGE_NAME] || []),
            (t = t.concat(e)),
            (t = this._applyStrategiesFilter(t)),
            (t = this._applyGlobalFilter(t)),
            this.preparePageStudies(i, t))
        }),
        (o.prototype.resetAllPages = function() {
          this.resetBasicPage(),
            this.resetCustomScriptPage(),
            this.resetPublishedScriptPage(),
            this.resetInvitesOnlyPage()
        }),
        (o.prototype._fillScriptsMetainfo = function(t, e) {
          var i, s, o
          for (i = 0; i < t.length; i++)
            (s = t[i]),
              (o = h.createMetaInfoStub(s, '1')),
              TradingView.merge(o, h.parseIdString(o.id)),
              e.push(o)
        }),
        (o.prototype.resetCustomScriptPage = function() {}),
        (o.prototype.resetPublishedScriptPage = function() {}),
        (o.prototype._createItemsList = function() {
          return $('<div class="tv-insert-indicator-dialog__items-list">')
        }),
        (o.prototype._createSubGroupItem = function(t) {
          return $('<div class="tv-insert-study-item tv-insert-study-item--subgroup-header">').text(
            t,
          )
        }),
        (o.prototype._createItemsGroup = function(t, e, i) {
          var s,
            o = this._createItemsList()
          return (
            this.fillStudies(o, t, i),
            (s = $('<div class="tv-insert-indicator-dialog__subgroup">')),
            e.length && s.append(this._createSubGroupItem(e)),
            s.append(o),
            s
          )
        }),
        (o.prototype.addSearchPage = function() {
          var t,
            e,
            i,
            s = p({ addClass: 'tv-insert-indicator-dialog__search-control' })
          ;(this._tabs.search = s.$control.data('title', 'search')),
            (this._pages.search = $(
              '<div class="tv-insert-indicator-dialog__page tv-insert-indicator-dialog__page--search">',
            ).data('title', 'search')),
            this._pages.search.data('fullTitle', $.t('Search')),
            (t = null),
            (this._search_value = null),
            (this._search_input = s.$input),
            s.inputChangedDelegate.subscribe(
              null,
              function() {
                t && clearTimeout(t),
                  (t = setTimeout(
                    function() {
                      ;(t = null), this.search(this._search_input.val()), this._w_pages.scrollTop(0)
                    }.bind(this),
                    200,
                  ))
              }.bind(this),
            ),
            this._search_input.focus(
              function() {
                this.search(this._search_input.val())
              }.bind(this),
            ),
            (e = this._widget.find('#js-search-placeholder')),
            e.length && e.parent()[0].replaceChild(this._tabs.search[0], e[0]),
            this._w_pages.prepend(this._pages.search),
            (i = {}),
            (i[m.ENTER] = this._onEnterKeyHandler.bind(this)),
            (i[m.UP_ARROW] = this._onUpKeyHandler.bind(this)),
            (i[m.DOWN_ARROW] = this._onDownKeyHandler.bind(this)),
            (this._keyDownListener = new S('keydown', !1)),
            this._keyDownListener.regHandlers(i)
        }),
        (o.prototype._onEnterKeyHandler = function(t) {
          t.target !== this._$economyTabInput[0] &&
            (null !== this._selectedStudy
              ? this.insertThisStudy(this._selectedStudy)
              : this._insertStudyByShortDescription())
        }),
        (o.prototype._onUpKeyHandler = function(t) {
          var e, i, s
          t.preventDefault(),
            null !== this._selectedStudy &&
              ((e = this.currentPage().find('.js-study-item')),
              (i = e.index(this._selectedStudy)),
              (s = e.eq(i - 1)),
              s.length &&
                i > 0 &&
                (this._selectedStudy.removeClass('tv-insert-study-item--selected'),
                s.addClass('tv-insert-study-item--selected'),
                (this._selectedStudy = s),
                this._ensureSelectedItemIsVisible()))
        }),
        (o.prototype._onDownKeyHandler = function(t) {
          var e, i, s
          t.preventDefault(),
            null !== this._selectedStudy && this.currentPage()[0].contains(this._selectedStudy[0])
              ? ((e = this.currentPage().find('.js-study-item')),
                (i = e.index(this._selectedStudy)),
                (s = e.eq(i + 1)),
                s.length &&
                  (this._selectedStudy.removeClass('tv-insert-study-item--selected'),
                  s.addClass('tv-insert-study-item--selected'),
                  (this._selectedStudy = s),
                  this._ensureSelectedItemIsVisible()))
              : ((this._selectedStudy = this.currentPage()
                  .find('.js-study-item')
                  .first()),
                this._selectedStudy.addClass('tv-insert-study-item--selected'))
        }),
        (o.prototype._ensureSelectedItemIsVisible = function() {
          var t, e, i, s, o, n
          null !== this._selectedStudy &&
            ((t = this._w_pages),
            (e = this._selectedStudy[0].getBoundingClientRect()),
            (i = t[0].getBoundingClientRect()),
            (s = this.currentPage()[0].getBoundingClientRect().top),
            (o = e.top - s),
            (n = 3),
            e.top - i.top < 0
              ? t.scrollTop(o - n)
              : e.bottom - i.bottom > 0 && t.scrollTop(o - i.height + e.height + n))
        }),
        (o.prototype.search = function(t, e, i) {
          function s(t, e, i, s, o, n) {
            t.push(e),
              (t[t.length - 1].matchPriority = s),
              o && (t[t.length - 1].matchIndex = i.match(n).index)
          }
          var o,
            n,
            a,
            l,
            c,
            h = this
          ;(this._search_value !== t || e) &&
            ((o = this._pages.search),
            (n = []),
            (a = function(t) {
              return t.replace(/[!-\/[-^{-}]/g, '\\$&')
            }),
            '' !== t &&
              ((l =
                t
                  .split('')
                  .map(function(t, e) {
                    var i = a(t)
                    return 0 !== e && (i = '[/\\s-]' + i), '(' + i + ')'
                  })
                  .join('(.*?)') + '(.*)'),
              n.push({
                fullMatch: RegExp('(' + a(t) + ')', 'i'),
                re: RegExp('^' + l, 'i'),
                reserveRe: RegExp(l, 'i'),
                fuzzyHighlight: !0,
              }),
              t.toLowerCase() in this.DEFAULT_OPTIONS.searchKeywords &&
                n.push({
                  fullMatch: this.DEFAULT_OPTIONS.searchKeywords[t.toLowerCase()],
                  re: this.DEFAULT_OPTIONS.searchKeywords[t.toLowerCase()],
                  fuzzyHighlight: !1,
                })),
            (this._search_value = t),
            (c = $.Deferred()),
            (h._currentAsyncSearchDfd = c),
            r.enabled('plain_studymarket')
              ? c.resolve([])
              : PublishedScript.suggest(t)
                  .done(function(t) {
                    var e = []
                    t && t.results
                    c.resolve(e)
                  })
                  .fail(function() {
                    c.resolve([])
                  }),
            c.done(
              function(e) {
                var i, r, a, l, d, u, p, _, g, f, v, y, b, m, S, C, w, T, E, A, P, I
                if (h._currentAsyncSearchDfd === c) {
                  for (
                    i = Object.keys(h._studies),
                      i.indexOf(h._PUBLISHED_STUDIES_PACKAGE_NAME) < 0 &&
                        i.push(h._PUBLISHED_STUDIES_PACKAGE_NAME),
                      i.sort(),
                      r = [
                        h._BASIC_STUDIES_PACKAGE_NAME,
                        h._STANDARD_STUDIES_PACKAGE_NAME,
                        h._PUBLISHED_STUDIES_PACKAGE_NAME,
                        h._CUSTOM_STUDIES_PACKAGE_NAME,
                      ],
                      a = r.length;
                    a--;

                  )
                    (l = r[a]), -1 !== (d = i.indexOf(l)) && (i.splice(d, 1), i.unshift(l))
                  for (u = {}, p = 0, _ = 0; _ < i.length; _++)
                    if (((g = i[_]), !k || g !== h._FUNDAMENTAL_PACKAGE_NAME)) {
                      for (
                        f = [],
                          v = h._studies[g],
                          g === h._PUBLISHED_STUDIES_PACKAGE_NAME && (v = e),
                          a = 0;
                        a < v.length;
                        a++
                      )
                        if (((y = v[a]), n.length))
                          for (b = 0; b < n.length; b++)
                            (m = n[b].re),
                              (m.lastIndex = 0),
                              (S = n[b].fullMatch),
                              (C = y.shortDescription),
                              C && C.toLowerCase() === t.toLowerCase()
                                ? s(f, y, C, 3, !0, S)
                                : C && S.test(C)
                                ? s(f, y, C, 2, !0, S)
                                : ((C = this._getScriptLocalizedName(y)),
                                  S.test(C)
                                    ? s(f, y, C, 1, !0, S)
                                    : m.test(C) && s(f, y, C, 0, !0, m))
                        else f.push(y)
                      if (((f = h._applyGlobalFilter(f)), f.length)) {
                        switch (((w = g), g)) {
                          case h._BASIC_STUDIES_PACKAGE_NAME:
                          case h._STANDARD_STUDIES_PACKAGE_NAME:
                            w = h._BASIC_STUDIES_PAGE_NAME
                            break
                          case h._CUSTOM_STUDIES_PACKAGE_NAME:
                            w = $.t('My Scripts')
                            break
                          case h._PUBLISHED_STUDIES_PACKAGE_NAME:
                            w = $.t('Public Library')
                            break
                          default:
                            g in h._packagesWithTabNames && (w = h._packagesWithTabNames[w])
                        }
                        w in u || (u[w] = []), (u[w] = u[w].concat(f)), (p += f.length)
                      }
                    }
                  for (
                    T = this._selectedStudy ? this._selectedStudy.data('study') : null,
                      o.html(''),
                      E = Object.keys(u),
                      a = 0;
                    a < E.length;
                    ++a
                  )
                    if (
                      ((w = E[a]),
                      (f = u[w]),
                      n.length &&
                        Array.prototype.sort.call(f, function(t, e) {
                          if (t.matchPriority < e.matchPriority) return 1
                          if (t.matchPriority > e.matchPriority) return -1
                          if (t.matchPriority === e.matchPriority)
                            switch (t.matchIndex) {
                              case void 0:
                                return 0
                              default:
                                return t.matchIndex > e.matchIndex
                                  ? 1
                                  : t.matchIndex < e.matchIndex
                                  ? -1
                                  : 0
                            }
                        }),
                      (A = this._createItemsGroup(f, this._options.minimized ? '' : $.t(w), n)),
                      o.append(A),
                      (this._selectedStudy = null),
                      T && T.pine && T.pine.version < 0)
                    )
                      for (P = this.currentPage().find('.js-study-item'), b = 0; b < P.length; ++b)
                        if (((I = $(P[b])), I.data('study').id === T.id)) {
                          ;(this._selectedStudy = I),
                            this._selectedStudy.addClass('tv-insert-study-item--selected')
                          break
                        }
                  0 === p &&
                    o.append(
                      '<p class="tv-insert-indicator-dialog__not-found-message">' +
                        $.t('No indicators matched your criteria.') +
                        '</p>',
                    )
                }
              }.bind(this),
            )),
            i || this.selectPage('search')
        }),
        (o.prototype.updateSearchPage = function() {
          var t = this._search_input.val()
          this.search(t, !0, !0)
        }),
        (o.prototype.updateMarketPages = function() {}),
        (o.prototype.preparePageStudies = function(t, e, i, s) {
          var o, n
          t &&
            (s || (e = this.sortStudies(e)),
            (o = this._selectedStudy ? this._selectedStudy.data('study') : null),
            t.empty(),
            (n = this._createItemsList()),
            this.fillStudies(n, e, null, o && o.id),
            t.append(n))
        }),
        (o.prototype.addPage = function(t, e) {
          var i, s, o, n, r, a
          return (
            (e = $.extend({}, e)),
            (i = e.localizedTitle || $.t(t)),
            (s = t.toLowerCase()),
            (o = $('<div class="tv-insert-indicator-dialog__page">').data('title', s)),
            (n = $('<div class="tv-insert-indicator-dialog__tab js-tab"></div>')
              .text(i)
              .data('title', s)
              .attr('title', i)),
            (r = e.technical ? $.t('Technical Analysis') + ': ' : ''),
            o.data('fullTitle', r + i),
            n.toggleClass('tv-insert-indicator-dialog__tab--beta', !!e.beta),
            e.packageName && (this._packagesWithTabNames[e.packageName] = t),
            (this._pages[s] = o),
            (this._tabs[s] = n),
            e.withoutTopPadding &&
              o.addClass('tv-insert-indicator-dialog__page--without-top-padding'),
            e.noFlex && o.addClass('tv-insert-indicator-dialog__page--no-flex'),
            e.technical || e.market
              ? ((a = e.technical ? this._getOrCreateTechnicalTab() : this._getOrCreateMarketTab()),
                a.find('.tv-insert-indicator-dialog__tabs').append(n),
                e.market && o.addClass('js-marketplace-page'))
              : this._w_market_tabs
              ? n.insertBefore(this._w_market_tabs)
              : this._w_tabs.append(n),
            this._w_pages.append(o),
            o.toggleClass('i-hidden', s !== this._currentPageTitle),
            o
          )
        }),
        (o.prototype._createGroupTab = function(t, e) {
          var i = $(s.render(A, { title: t }))
          return (
            i.find('.js-tab-head').on(
              'click',
              function() {
                this._expandCollapseTabs(i, e)
              }.bind(this),
            ),
            this._expandCollapseTabs(i, e, g.getBool(e, !0), !0),
            i.data('settings-open-key', e),
            this._w_tabs.append(i),
            i
          )
        }),
        (o.prototype._getOrCreateMarketTab = function() {
          return (
            this._w_market_tabs ||
              ((this._w_market_tabs = this._createGroupTab(
                $.t('Marketplace Add-ons'),
                'studyMarket.marketTabIsOpen',
              )),
              this._w_market_tabs.addClass('tv-insert-indicator-dialog__tabs-group--marketplace')),
            this._w_market_tabs
          )
        }),
        (o.prototype._getOrCreateTechnicalTab = function() {
          return (
            this._w_technical_tabs ||
              (this._w_technical_tabs = this._createGroupTab(
                $.t('Technical Analysis'),
                'studyMarket.technicalTabIsOpen',
              )),
            this._w_technical_tabs
          )
        }),
        (o.prototype._onDialogClosed = function() {
          this._keyDownListener.stopWatching(window),
            this._shortCutsLockId && C.enable(this._shortCutsLockId),
            null !== this._selectedStudy &&
              this._selectedStudy.removeClass('tv-insert-study-item--selected'),
            (this._selectedStudy = null),
            this.visibilityChanged.fire(!1),
            b.removeListener('StudyMarketDialog')
        }),
        (o.prototype.hide = function() {
          this._dialog.close()
        }),
        (o.prototype.show = function(t) {
          var e, i
          this.init(),
            (e = !1),
            (i = (t instanceof TradingView.Study && t) || null),
            i !== this._parentSource &&
              ((this._parentSource = i),
              (this._dialogTitleText = this._parentSource
                ? $.t('Apply Indicator on {0}').format(this._parentSource.title(!0))
                : r.enabled('study_dialog_fundamentals_economy_addons')
                ? $.t('Indicators & Strategies')
                : $.t('Indicators')),
              (e = !0)),
            this._updateDialogTitleText(),
            this._widget.on(
              'keyup.hideDialogStudy',
              function(t) {
                t.which === m.ESC && (this._widget.unbind('keyup.hideDialogStudy'), this.hide())
              }.bind(this),
            ),
            this._clearInput(),
            this.loadFavorites(),
            e && this.resetAllPages(),
            this._scroll.scrollTo(0),
            this.visibilityChanged.fire(!0),
            this.focusAddSymbolInput(this._currentPageTitle),
            (this._shortCutsLockId = C.disable()),
            this._keyDownListener.watchOn(window),
            b.registerListener(
              'StudyMarketDialog',
              function(t) {
                return (
                  !t.ctrlKey &&
                  (47 !== t.which &&
                    (!!t.charCode &&
                      (!(!t.which || t.which <= 32) &&
                        (!/^(input|textarea)$/i.test(t.target.tagName) &&
                          (t.preventDefault(),
                          !!(
                            TradingView.onWidget() ||
                            (this._options.minimized && !r.enabled('study_dialog_search_control'))
                          ) ||
                            (this._search_input.focus(),
                            (this._search_input[0].value = String.fromCharCode(t.charCode)),
                            !0))))))
                )
              }.bind(this),
            ),
            this._dialog.open(),
            l.emit('indicators_dialog')
        }),
        (o.prototype.isVisible = function() {
          return !!this._initialized && this._widget.is(':visible')
        }),
        (o.prototype.getPage = function(t) {
          return (t = t.toLowerCase()), this._pages[t]
        }),
        (o.prototype.focusAddSymbolInput = function(t) {
          t === this._ECONOMY_TAB.toLowerCase() &&
            this._$economyTabInput &&
            this._$economyTabInput.focus()
        }),
        (o.prototype._showHideBackButton = function() {
          if (this._dialog && !this._options.minimized) {
            var t = '' !== this._currentPageTitle
            this._dialog.$el.find('.js-title-container').toggleClass('i-with-back-button', t)
          }
        }),
        (o.prototype.selectPage = function(t) {
          var e, i, s, o, n, r
          if (((t = t.toLowerCase()), this.focusAddSymbolInput(t), this._currentPageTitle !== t))
            if (
              '' === t ||
              (t in this._pages &&
                t in this._tabs &&
                ('favorites' !== t || this.hasVisibleFavorites()))
            ) {
              for (e in this._pages)
                if (
                  ((i = t === e),
                  (s = this._pages[e]),
                  s.toggleClass('i-hidden', !i),
                  this._tabs[e].toggleClass('i-active', i),
                  i)
                ) {
                  if (
                    (s.trigger('show-page'),
                    (o = this._tabs[e].parents('.tv-insert-indicator-dialog__tabs-group')),
                    0 === o.length)
                  )
                    continue
                  ;(n = o.find('.js-tab-head')),
                    this._expandCollapseTabs(o, n.data('settings-open-key'), !0, !0)
                }
              ;(this._currentPageTitle = t),
                this._w_pages.scrollTop(0),
                g.setValue(this._PAGE_KEY, t),
                this._selectedStudy &&
                  (this._selectedStudy.removeClass('tv-insert-study-item--selected'),
                  (this._selectedStudy = null)),
                (r = '' !== this._currentPageTitle),
                this._widget.find('.js-tabs-viewport').toggleClass('i-active', !r),
                this._w_pages.toggleClass('i-active', r),
                this._showHideBackButton(),
                r || this._search_input.blur(),
                this._updateDialogTitleText()
            } else this.selectPage(this._BASIC_STUDIES_PAGE_NAME)
        }),
        (o.prototype.attachHandlers = function() {
          var t = Modernizr.touch ? 'touchend' : 'click',
            e = this
          Modernizr.touch &&
            this._w_pages.on('touchstart', '.js-study-item', function(t) {
              e._touchStart = $.extend({}, t.originalEvent.touches[0])
            }),
            this._w_tabs.on('click', '.js-tab', this._onTabClicked.bind(this)),
            r.enabled('items_favoriting') &&
              this._w_pages.on(t, '.js-favorite-icon', this.toggleItem.bind(this)),
            this._w_pages.on(t, '.js-study-item', function(t) {
              var i
              ;(e._touchStart &&
                ((i = e._w_pages.find('.tv-insert-study-item')[0].clientHeight),
                Math.abs(e._touchStart.screenY - t.originalEvent.changedTouches[0].screenY) > i)) ||
                (e._selectedStudy && e._selectedStudy.removeClass('tv-insert-study-item--selected'),
                (e._selectedStudy = $(t.target).closest('.js-study-item')),
                e._selectedStudy.addClass('tv-insert-study-item--selected'),
                e.insertThisStudy(e._selectedStudy))
            })
        }),
        (o.prototype._onTabClicked = function(t) {
          var e = $(t.currentTarget).data('title')
          e && 'search' !== e && this.selectPage(e), t.stopPropagation()
        }),
        (o.prototype._expandCollapseTabs = function(t, e, i, s) {
          var o,
            n = t.hasClass('i-dropped')
          if (void 0 === i) i = !t.hasClass('i-dropped')
          else if (n === i && !s) return
          if (
            ((o = t.find('.tv-insert-indicator-dialog__tabs')), t.toggleClass('i-dropped', !!i), s)
          )
            return void o.toggleClass('i-hidden', !i)
          o.removeClass('i-hidden'),
            o.velocity(i ? 'slideDown' : 'slideUp', {
              duration: _.dur / 2,
              complete: function() {
                g.setValue(e, i), this._scroll.updateScroll()
              }.bind(this),
            })
        }),
        (o.prototype.toggleItem = function(t) {
          var e = $(t.target)
            .closest('.js-study-item')
            .data('study')
          return this.toggleFavorite(e.id), this.toggleEverywhere(e.id), !1
        }),
        (o.prototype.toggleEverywhere = function(t) {
          var e = this,
            i = this.isFavorite(t)
          this._w_pages
            .find('.js-study-item')
            .filter(function(i, s) {
              var o = $(s).data('study')
              return !!o && e.favsModel.favId(o.id) === e.favsModel.favId(t)
            })
            .find('.js-favorite-icon')
            .toggleClass('i-starred', i)
            .attr('title', this.favTitle(i))
        }),
        (o.prototype.toggleFavorite = function(t) {
          this.favsModel.favorite(t)
        }),
        (o.prototype.isFavorite = function(t) {
          return this.favsModel.isFav(t)
        }),
        (o.prototype._getInviteOnlyStudies = function() {
          return new Promise(function(t, e) {
            t([])
          })
        }),
        (o.prototype.resetInvitesOnlyPage = function() {
          var t = this
          t._tabs.invitesonly &&
            (t._previousInviteOnlyStudiesIds && 0 !== t._previousInviteOnlyStudiesIds.length
              ? t._tabs.invitesonly.show()
              : t._tabs.invitesonly.hide()),
            t._getInviteOnlyStudies().then(
              function(e) {
                ;(t._previousInviteOnlyStudies = e),
                  t.preparePageStudies(t._pages.invitesonly, e),
                  t._tabs.invitesonly &&
                    (e && 0 !== e.length ? t._tabs.invitesonly.show() : t._tabs.invitesonly.hide())
              },
              function() {
                t.preparePageStudies(t._pages.invitesonly, []),
                  t._tabs.invitesonly && t._tabs.invitesonly.hide()
              },
            )
        }),
        (o.prototype.updateFavorites = function() {
          var t, e, i, s, n, r, a, l, c, d, u, p, _
          if (this._w_pages) {
            if (
              ((t = this),
              (e = this.getVisibleFavorites()),
              (i = function() {
                'favorites' === t._currentPageTitle &&
                  t.selectPage(f.device === o._breakpointDevice ? '' : t._BASIC_STUDIES_PAGE_NAME),
                  t._w_pages.find('.js-favorite-icon').removeClass('i-starred'),
                  t._tabs && t._tabs.favorites && t._tabs.favorites.hide()
              }),
              t._tabs.favorites && 0 === e.length)
            )
              return void i()
            for (s = $.Deferred(), n = [], r = [], a = 0; a < e.length; a++)
              if (
                ((l = e[a]),
                (c = this.getStudyPackageName(l)),
                !k || c !== t._FUNDAMENTAL_PACKAGE_NAME)
              )
                if (c !== t._PUBLISHED_STUDIES_PACKAGE_NAME) {
                  for (d = this._studies[c] || [], u = 0; u < d.length; u++)
                    if (
                      ((p = t.favsModel.favId(h.cutFullId(d[u].id))),
                      (_ = t.favsModel.favId(l)),
                      p === _)
                    ) {
                      n.push(d[u])
                      break
                    }
                } else r.push(l)
            ;(r.length && !this._options.minimized) || s.resolve(n),
              s.done(
                function(t) {
                  0 === t.length ? i() : this._tabs.favorites.show(),
                    (t = this._applyStrategiesFilter(t)),
                    this.preparePageStudies(this._pages.favorites, t),
                    this._w_pages
                      .find('.js-study-item')
                      .find('.js-favorite-icon')
                      .removeClass('i-starred'),
                    e.forEach(this.toggleEverywhere, this)
                }.bind(this),
              ),
              n && 0 !== n.length && this._tabs.favorites.show()
          }
        }),
        (o.prototype.hasVisibleFavorites = function() {
          return !!this.getVisibleFavorites().length
        }),
        (o.prototype.getVisibleFavorites = function() {
          return this.checkExcludePackageStudies(this.favsModel.favorites())
        }),
        (o.prototype.checkExcludePackageStudies = function(t) {
          return t.filter(function(t) {
            var e = this.getStudyPackageName(t)
            return (
              e === this._PUBLISHED_STUDIES_PACKAGE_NAME ||
              (!!(
                this._studies &&
                this._studies[e] &&
                $.grep(this._studies[e], function(e) {
                  return e.id.indexOf(t) >= 0
                }).length > 0
              ) &&
                (e === this._BASIC_STUDIES_PACKAGE_NAME ||
                  e === this._STANDARD_STUDIES_PACKAGE_NAME ||
                  e === this._CUSTOM_STUDIES_PACKAGE_NAME ||
                  e === this._SCRIPTING_PACKAGE_NAME ||
                  e === this._FUNDAMENTAL_PACKAGE_NAME ||
                  (pro.hasPackage(e) && e in this._studies)))
            )
          }, this)
        }),
        (o.prototype.sortStudies = function(t) {
          return t.sort(function(t, e) {
            return (
              (t = t.scriptName || t.description_localized || t.description),
              (e = e.scriptName || e.description_localized || e.description),
              t > e ? 1 : t < e ? -1 : 0
            )
          })
        }),
        (o.prototype.fillStudies = function(t, e, i, s) {
          var o
          t.empty(),
            e.forEach(function(e) {
              e
                ? ((o = this.createStudyListItem(e, i)),
                  e.id === s &&
                    ((this._selectedStudy = o),
                    this._selectedStudy.addClass('tv-insert-study-item--selected')))
                : ((o = document.createElement('div')), (o.className = 'placeholder')),
                t.append(o)
            }, this)
        }),
        (o.prototype.createStudyListItem = function(t, e) {
          var i,
            o,
            n,
            a,
            l,
            c,
            d,
            u,
            p,
            _,
            g,
            f,
            v,
            y,
            b,
            m,
            S,
            C,
            w,
            T,
            E,
            A,
            k,
            I,
            O,
            x,
            M,
            D = this._getScriptLocalizedName(t),
            j = this.isFavorite(t.id),
            B = []
          if (e && D)
            for (
              i = [],
                e instanceof RegExp
                  ? i.push({ re: e, fuzzyHighlight: !1 })
                  : $.isArray(e) && (i = e),
                o = 0;
              o < i.length;
              o++
            )
              if (
                ((n = i[o].fullMatch),
                (a = i[o].reserveRe),
                (l = i[o].re),
                (n.lastIndex = 0),
                (l.lastIndex = 0),
                (c = n.exec(D)),
                c
                  ? (i[o].fuzzyHighlight = !1)
                  : ((c = l.exec(D)), !c && a && (c = a.exec(D)), (i[o].fuzzyHighlight = !0)),
                c)
              )
                if (i[o].fuzzyHighlight)
                  for (d = c.index, u = 1; u < c.length; u++)
                    (p = c[u].length), u % 2 && (B[d] = !0), (d += p)
                else for (_ = 0; _ < c[0].length; _++) B[c.index + _] = !0
          return (
            (g = TradingView.clean(D, !0)),
            (f = g.replace(/./g, function(t, e) {
              if (
                ('<' === t ? (t = '&lt;') : '&' === t ? (t = '&amp;') : '"' === t && (t = '&quot;'),
                B[e])
              ) {
                if (' ' === t || '-' === t || '/' === t) return (B[e + 1] = !0), t
                t = '<span class="i-match">' + t + '</span>'
              }
              return t
            })),
            (v = !!t.pine),
            (y = this.getStudyPackageName(t.id)),
            (b = v && y === this._PUBLISHED_STUDIES_PACKAGE_NAME),
            (m = v && y === this._CUSTOM_STUDIES_PACKAGE_NAME),
            (S =
              v &&
              (y === this._STANDARD_STUDIES_PACKAGE_NAME || y === this._FUNDAMENTAL_PACKAGE_NAME)),
            (C =
              v &&
              [
                TVScript.Access.ACCESS_CLOSED_NEEDS_AUTH,
                TVScript.Access.ACCESS_CLOSED_NO_AUTH,
              ].indexOf(t.pine.access) >= 0),
            (w = v && TVScript.Access.ACCESS_CLOSED_NEEDS_AUTH === t.pine.access),
            (T = v && w && void 0 !== t.pine.userHaveAccess),
            (E = v && t.pine.userHaveAccess),
            (A = !!t.TVScriptSourceCode),
            (k = !1),
            (I = v && !S && !C && (m || b || A || (j && !k))),
            (O = {
              closed: $.t('Invite-only script. Contact the author for more information.'),
              open: $.t('Invite-only script. You have been granted access.'),
            }),
            (x = $(
              s.render(P, {
                publishedOrUserScript: m || b,
                title: f,
                titleTooltip: TradingView.strip_tags(g),
                isStrategy: h.isScriptStrategy(t),
                isInviteOnly: w,
                showAccessIcon: T,
                accessIconClass: E
                  ? 'tv-insert-study-item__green-lock-icon'
                  : 'tv-insert-study-item__red-lock-icon',
                accessTooltip: E ? O.open : O.closed,
                author: t.author && t.author.username,
                likes: t.agreeCount
                  ? t.agreeCount + ' ' + $.t('like', { plural: 'likes', count: t.agreeCount })
                  : '',
                showMoreButton: !!t.imageUrl,
                deleteButton: !t.imageUrl && m,
                withFavorites: r.enabled('items_favoriting') && !this._options.minimized,
              }),
            )),
            I ||
              x
                .find('.js-show-source-btn')
                .removeClass('js-show-source-btn')
                .addClass('i-empty'),
            x.data('study', t),
            void 0 !== t.isCustomIndicator && x.addClass('custom-indicator'),
            r.enabled('items_favoriting') &&
              ((M = x.find('.js-favorite-icon')),
              M.toggleClass('i-starred', !!j),
              M.attr('title', this.favTitle(!!j))),
            r.enabled('graying_disabled_tools_enabled') &&
              ChartApiInstance.studiesAccessController.isToolGrayed(t.description) &&
              x.addClass('i-grayed'),
            x
          )
        }),
        (o.prototype.favTitle = function(t) {
          return t ? $.t('Remove from favorites') : $.t('Add to favorites')
        }),
        (o.prototype.insertThisStudy = function(t) {
          if (!t.hasClass('placeholder')) {
            var e = t.data('study')
            return r.enabled('graying_disabled_tools_enabled') &&
              ChartApiInstance.studiesAccessController.isToolGrayed(e.description)
              ? void l.emit('onGrayedObjectClicked', { type: 'study', name: e.description })
              : (t.highlight(this.HIGHLIGHT_STUDY_NUM_FLICKS), this.insertStudy(e), !1)
          }
        }),
        (o.prototype.insertStudy = function(t) {
          var e,
            i,
            s = this,
            o = s._chartWidgetCollection.activeChartWidget.value()
          o &&
            ((e = o.insertStudyStub(t.description)),
            (i = h.replaceWithFullStudyMetaInfoAsync(o.model().studiesMetaData(), t)),
            i.done(
              function(t) {
                if (o.removeStudyStub(e.id())) {
                  if (this._parentSource && !h.canBeChild(t))
                    return void u({
                      type: 'modal',
                      title: $.t('Oops!'),
                      content: $.t('This indicator cannot be applied to another indicator'),
                    })
                  o.insertStudyOrShowDialog(t, this._parentSource, function() {
                    s._dialog.focus()
                  }),
                    (this._is_on_chart = !0)
                }
              }.bind(this),
            ),
            i.fail(function(t) {
              T.logError('Error: ' + t), e.setStatus(t)
            }))
        }),
        (o.prototype.onLoginStateChange = function(t) {
          t || this.setUser(window.user),
            PublishedScript.cleanCache(),
            this.resetAllPages(),
            this.setup(),
            this.init()
        }),
        (o.prototype.getStudyList = function(t) {
          function e(t) {
            i.push(t)
          }
          var i, s
          if (!this.studiesReady.isResolved()) return []
          i = []
          for (s in this._studies)
            (s === this._BASIC_STUDIES_PACKAGE_NAME || pro.hasPackage(s)) &&
              (this._studies[s].forEach(e), t && i.push({ separator: !0 }))
          return t && i.splice(i.length - 1, 1), i
        }),
        (o.prototype.getStudyPackageName = function(t) {
          var e, i, s, o, n, r
          if (t)
            return (
              (e = t.split('@')),
              (i = 1 === e.length) || (s = h.getPackageName(t)) === this._SCRIPTING_PACKAGE_NAME
                ? ((o = e[0]),
                  i || /^(Strategy)?Script\$/.test(o)
                    ? ((n = o.indexOf('_')),
                      -1 !== n
                        ? ((s = o.substring(0, n)),
                          (r = s.indexOf('Script$') >= 0 ? s : 'Script$' + s),
                          pro.getSuperProduct(r) || r)
                        : /USER;/.test(o)
                        ? this._CUSTOM_STUDIES_PACKAGE_NAME
                        : /PUB;/.test(o)
                        ? this._PUBLISHED_STUDIES_PACKAGE_NAME
                        : /STD;/.test(o)
                        ? this._STANDARD_STUDIES_PACKAGE_NAME
                        : o)
                    : s)
                : s
            )
        }),
        (o.prototype.selectSearchPage = function() {
          this.selectPage('search'), this._clearInput()
        }),
        (o.prototype._insertStudyByShortDescription = function() {
          var t,
            e,
            i,
            s = this._search_value
          for (
            s = s.trim(), t = this._studies[this._BASIC_STUDIES_PACKAGE_NAME], e = 0;
            e < t.length;
            e++
          )
            if (
              ((i = t[e]),
              i.shortDescription && i.shortDescription.toUpperCase() === s.toUpperCase())
            ) {
              this.insertStudy(i)
              break
            }
        }),
        (o.prototype._clearInput = function() {
          this._search_input.val(''),
            'search' === this._currentPageTitle &&
              this._search_input
                .val('')
                .trigger('input')
                .focus()
        }),
        (o.prototype._getScriptType = function() {
          return 0
        }),
        (o.prototype._getScriptLocalizedName = function(t) {
          return (
            t.description_localized ||
            $.t(t.scriptName || t.description || ' ', { context: 'study' })
          )
        }),
        (o.prototype._pubSearchEntryAlreadyLoaded = function(t) {
          var e = t.scriptIdPart.split(';')[1]
          return !(this._pubSearchCache.indexOf(e) < 0) || (this._pubSearchCache.push(e), !1)
        }),
        (o.prototype._addPubSearchResult = function(t, e) {
          t.length &&
            (t.forEach(function(t) {
              this._pubSearchEntryAlreadyLoaded(t) ||
                (this._pubSearchEntries.push(t), this._pubSearchCount[t.scriptType]++)
            }, this),
            0 === e && (this._pubSearchCount[0] += t.length),
            this._pubSearchEntries.sort(function(t, e) {
              return e.agreeCount - t.agreeCount
            }))
        }),
        (o.prototype._getPublicLibraryRequestParams = function(t) {
          var e = this._pubSearchCount[t],
            i = this._PUB_SEARCH_ENTRIES_ON_PAGE
          return (
            e < this._PUB_SEARCH_ENTRIES_ON_PAGE && (i = this._PUB_SEARCH_ENTRIES_ON_PAGE - e),
            { offset: e, count: i, type: t }
          )
        }),
        (t.exports.StudyMarketDialog = o)
    }.call(e, i(8), i(126)))
  },
  827: function(t, e, i) {
    'use strict'
    function s(t) {
      return t in $.fn
        ? Promise.resolve()
        : (r ||
            (r = new Promise(function(t) {
              i.e(31)
                .then(
                  function(e) {
                    i(831), t()
                  }.bind(null, i),
                )
                .catch(i.oe)
            })),
          r)
    }
    function o(t) {
      return new a(t)
    }
    var n, r, a
    Object.defineProperty(e, '__esModule', { value: !0 }),
      i.d(e, 'LazyJqueryUI', function() {
        return a
      }),
      (e.lazyJqueryUI = o),
      (n = i(14)),
      i.n(n),
      (a = (function() {
        function t(t) {
          this._$elem = t
        }
        return (
          (t.prototype.draggable = function() {
            var t = arguments,
              e = this._$elem
            return s('draggable').then(function() {
              return e.draggable.apply(e, t)
            })
          }),
          (t.prototype.resizable = function() {
            var t = arguments,
              e = this._$elem
            return s('resizable').then(function() {
              return e.resizable.apply(e, t)
            })
          }),
          (t.prototype.sortable = function() {
            var t = arguments,
              e = this._$elem
            return s('sortable').then(function() {
              return e.sortable.apply(e, t)
            })
          }),
          (t.prototype.datepicker = function() {
            var t = arguments,
              e = this._$elem
            return s('datepicker').then(function() {
              return e.datepicker.apply(e, t)
            })
          }),
          t
        )
      })())
  },
  828: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path d="M5.182 6.596l-3.889-3.889-.707-.707 1.414-1.414.707.707 3.889 3.889 3.889-3.889.707-.707 1.414 1.414-.707.707-3.889 3.889 3.889 3.889.707.707-1.414 1.414-.707-.707-3.889-3.889-3.889 3.889-.707.707-1.414-1.414.707-.707 3.889-3.889z"/></svg>'
  },
  832: function(t, e, i) {
    'use strict'
    ;(function(s) {
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function n() {
        var t,
          e,
          i = h.width()
        for (u.width = i, u.height = h.height(), t = 0; t < p.length; t++)
          if (i <= u.breakpoints[p[t]]) {
            u.device !== p[t] &&
              ((e = u.device), (u.device = p[t]), u.trigger('changeDevice', [p[t], e]))
            break
          }
        return u
      }
      var r, a, l, c, h, d, u, p
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (r = i(301)),
        (a = o(r)),
        (l = i(838)),
        (c = $('body')),
        (h = $(window)),
        (d = 0),
        (u = {
          width: null,
          height: null,
          device: null,
          checkDevice: n,
          isMobileSafari:
            !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ||
            !!navigator.userAgent.match('CriOS'),
          getScrollbarWidth: (function() {
            var t = void 0
            return function() {
              var e, i, s, o
              return (
                void 0 === t &&
                  ((e = document.createElement('div')),
                  (e.style.visibility = 'hidden'),
                  (e.style.width = '100px'),
                  (e.style.msOverflowStyle = 'scrollbar'),
                  document.body.appendChild(e),
                  (i = e.offsetWidth),
                  (e.style.overflow = 'scroll'),
                  (s = document.createElement('div')),
                  (s.style.width = '100%'),
                  e.appendChild(s),
                  (o = s.offsetWidth),
                  e.parentNode.removeChild(e),
                  (t = i - o)),
                t
              )
            }
          })(),
          hasScroll: function(t) {
            return t.get(0).scrollHeight > t.height()
          },
          breakpoints: l.breakpoints,
          widgetbarBreakpoint: 1064,
          setFixedBodyState: function(t) {
            var e, i
            t && 1 == ++d
              ? ('hidden' !==
                  $(document.body)
                    .css('overflow')
                    .toLowerCase() &&
                  document.body.scrollHeight > document.body.offsetHeight &&
                  ($('.widgetbar-wrap').css('right', u.getScrollbarWidth()),
                  c
                    .css(
                      'padding-right',
                      parseInt(c.css('padding-right').replace('px', '')) +
                        u.getScrollbarWidth() +
                        'px',
                    )
                    .data('wasScroll', !0)),
                c.addClass('i-no-scroll'))
              : !t &&
                d > 0 &&
                0 == --d &&
                (c.removeClass('i-no-scroll'),
                c.data('wasScroll') &&
                  ((e = c.get(0)),
                  $('.widgetbar-wrap').css('right', 0),
                  (i = $('.widgetbar-wrap').width() || 0),
                  e.scrollHeight <= e.clientHeight && (i -= u.getScrollbarWidth()),
                  c.css('padding-right', (i < 0 ? 0 : i) + 'px').data('wasScroll', void 0)))
          },
        }),
        (p = Object.keys(u.breakpoints).sort(function(t, e) {
          return u.breakpoints[t] - u.breakpoints[e]
        })),
        s.extend(u, a.default.prototype),
        n(),
        $(n),
        h.on('resize', n),
        (e.default = u),
        (t.exports = e.default)
    }.call(e, i(187)))
  },
  833: function(t, e, i) {
    'use strict'
    ;(function(t) {
      function s(e, i, s) {
        var o,
          n,
          r,
          a,
          l,
          c,
          h = this
        if (
          ((this._options = $.extend({}, this._defaultOptions, s || {})),
          (this._$wrapper = e),
          (this._$content = i),
          (this._scroll_speed = 40),
          (this._shadow_offset = 10),
          (this._header_height = this._options.headerHeight),
          (this._scroll_margin_top = this._options.scrollMarginTop),
          (this.scrolled = new t()),
          (this.scrolltoend = new t()),
          (this.scrolltostart = new t()),
          (this.visibilityCallbacks = []),
          (o = navigator.platform.toLowerCase()),
          (n = navigator.userAgent.toLowerCase()),
          (r = n.indexOf('firefox') > -1),
          (a = o.indexOf('android') > -1 || n.indexOf('android') > -1),
          (this._touch = Modernizr.touch || navigator.msMaxTouchPoints || (r && a)),
          this._touch)
        )
          return (
            this._$content.css('position', 'relative'),
            void this._$wrapper
              .css({
                'overflow-y': 'auto',
                '-webkit-overflow-scrolling': 'touch',
                '-ms-overflow-style': '-ms-autohiding-scrollbar',
              })
              .scroll(this._onScroll.bind(this))
          )
        this._$wrapper.css('overflow', 'hidden'),
          this._$wrapper
            .on('mouseenter.sidebar-scroll', function() {
              h._bottomFixed ||
                h._dragging ||
                (h._options.alwaysVisible || h._$scrollBar.addClass('active'), h._onScroll())
            })
            .on('mouseleave.sidebar-scroll', function() {
              h._bottomFixed ||
                h._dragging ||
                (h._options.alwaysVisible || h._$scrollBar.removeClass('active'), h._onScroll())
            })
            .on('mousewheel.sidebar-scroll', function(t, e) {
              if (!t.isDefaultPrevented())
                return h.scroll(e, 'MozMousePixelScroll' === t.originalEvent.type ? 2 : null)
            }),
          !1 !== this._options.showTopShadow &&
            (this._$shadowTop = $('<div class="sb-inner-shadow top i-invisible">').appendTo(
              this._$wrapper,
            )),
          !1 !== this._options.showBottomShadow &&
            (this._$shadowBottom = $('<div class="sb-inner-shadow">').appendTo(this._$wrapper)),
          this._$shadowTop &&
            this._header_height &&
            this._$shadowTop.css('top', this._header_height - this._shadow_offset),
          (l = this._options.additionalClass ? ' ' + this._options.additionalClass : ''),
          (c = this._options.alwaysVisible ? ' active-always' : ''),
          (this._$scrollBarWrapper = $('<div class="sb-scrollbar-wrap">').appendTo(this._$wrapper)),
          (this._$scrollBar = $(
            '<div class="sb-scrollbar sb-scrollbar-body' + l + c + '"></div>',
          ).appendTo(this._$scrollBarWrapper)),
          this._onScroll()
      }
      var o = i(827).lazyJqueryUI
      ;(s.prototype.isTouch = function() {
        return this._touch
      }),
        (s.prototype.getScrollBar = function() {
          return this._$scrollBar
        }),
        (s.prototype._defaultOptions = {
          headerHeight: 0,
          additionalClass: '',
          alwaysVisible: !1,
          showBottomShadow: !0,
          scrollMarginTop: 1,
          bubbleScrollEvent: !1,
        }),
        (s.prototype.initDraggable = function() {
          if (this._dragInitialized) return this
          var t = this
          return (
            o(this._$scrollBar).draggable({
              axis: 'y',
              containment: this._$scrollBarWrapper,
              start: function() {
                t._dragging = !0
              },
              stop: function() {
                t._dragging = !1
              },
              drag: function(e, i) {
                t.updateScroll()
              },
            }),
            (this._dragInitialized = !0),
            this
          )
        }),
        (s.prototype.updateScroll = function() {
          var t, e, i, s, o
          return this._touch
            ? this
            : ((t = 1),
              (e = Math.ceil(
                this._$scrollBar.position().top - this._scroll_margin_top - this._header_height,
              )),
              (i = this.getContainerHeightWithoutHeader()),
              (s = this._$content.outerHeight()),
              (o = s - i - t),
              i <= 0
                ? this
                : ((this._scroll_target_top =
                    o <= 0
                      ? this._header_height
                      : Math.min((-e * s) / i + this._header_height, this._header_height)),
                  e + this._$scrollBar.height() + 2 >= i
                    ? this.scrollToEnd()
                    : (this._$content.css('top', this._scroll_target_top + 'px'), this._onScroll()),
                  this))
        }),
        (s.prototype.getContainerHeightWithoutHeader = function() {
          return this._$wrapper[0].getBoundingClientRect().height - this._header_height
        }),
        (s.prototype.getContainerHeight = function() {
          return this._$wrapper[0].getBoundingClientRect().height
        }),
        (s.prototype.getContentHeight = function() {
          return this._$content[0].getBoundingClientRect().height
        }),
        (s.prototype.updateScrollBar = function() {
          var t, e, i, s, o, n, r, a, l
          return this._touch
            ? this
            : ((t = 1),
              (e = this._$content.position().top),
              (i = this.getContentHeight()),
              (s = this.getContainerHeight()),
              (o = this.getContainerHeightWithoutHeader()),
              (n = t + this._header_height),
              (r = o - 2 * t),
              (a = ((Math.abs(e) - this._header_height) * r) / i),
              (l = (s * s) / i),
              this.isContentShort()
                ? (this._$scrollBar.addClass('js-hidden'),
                  this._$wrapper.removeClass('sb-scroll-active'))
                : (this._$scrollBar
                    .removeClass('js-hidden')
                    .height(l)
                    .css('top', n + a),
                  this._$wrapper.addClass('sb-scroll-active'),
                  this.initDraggable()),
              this)
        }),
        (s.prototype.scroll = function(t, e) {
          var i, s, o, n, r
          return this._touch
            ? this
            : ((i = this._$content.position().top),
              (s = this._$content.outerHeight()),
              (o = this.getContainerHeightWithoutHeader()),
              (n = s - o - 1),
              (r = e || this._scroll_speed),
              n <= 0 ||
                ((this._scroll_target_top = Math.max(
                  -n + this._header_height,
                  Math.min(this._header_height, i + t * r),
                )),
                this.setContentTop(this._scroll_target_top),
                this._onScroll()))
        }),
        (s.prototype.animateTo = function(t) {
          var e, i, s
          return this._touch
            ? this
            : ((e = this._$content.outerHeight()),
              (i = this.getContainerHeightWithoutHeader()),
              (s = e - i - 1) <= 0 ||
                ((this._scroll_target_top = Math.max(
                  -s + this._header_height,
                  Math.min(this._header_height, -t),
                )),
                void this._$content.animate(
                  { top: this._scroll_target_top },
                  500,
                  function() {
                    this._onScroll()
                  }.bind(this),
                )))
        }),
        (s.prototype.resize = function() {
          var t, e
          if (!this._bottomFixed) {
            if (
              ((t = this._$content.outerHeight()),
              (e = this._$wrapper.outerHeight()),
              !this._options.vAlignBottom && t < e)
            )
              return void (this.atStart() || this.scrollToStart())
            this.atEnd()
              ? this.scrollToEnd()
              : 'number' == typeof this._stickyBottom &&
                this.setContentTop(
                  Math.min(
                    0,
                    this._stickyBottom +
                      this._$wrapper.outerHeight() -
                      this._$content.outerHeight(),
                  ),
                )
          }
        }),
        (s.prototype.resizeHeader = function(t) {
          var e = t - this._header_height
          ;(this._header_height = t),
            (this._scroll_target_top += e),
            this._$shadowTop &&
              this._$shadowTop.css('top', this._header_height - this._shadow_offset),
            this.resize()
        }),
        (s.prototype.scrollTo = function(t, e) {
          var i, s, o, n, r, a
          if (
            ((e = $.extend(
              { position: 'visible', areaHeight: t instanceof $ ? t.height() : 0 },
              e,
            )),
            t instanceof $ && (t = e.offsetTop || t.position().top),
            (i = this._$content.position().top),
            (s = this._$content.outerHeight()),
            (o = this.getContainerHeightWithoutHeader()),
            s - o - 1 <= 0)
          )
            return !0
          if (
            ((n = -1 * (i - this._header_height)), (r = n + o), (a = 0), 'visible' === e.position)
          ) {
            if (t > n && t + e.areaHeight < r) return !1
            a = t + e.areaHeight > r ? r - t - e.areaHeight : n - t
          } else 'top' === e.position && (a = n - t)
          return this.scroll(a, 1), this._onScroll(), !1
        }),
        (s.prototype.scrollToEnd = function() {
          var t = this._$content.position().top,
            e = this._$content.outerHeight(),
            i = this._$wrapper.outerHeight(),
            s = e + t
          return this.setContentTop(t + (i - s) + 1), this._onScroll(), this
        }),
        (s.prototype.scrollToStart = function() {
          return this.setContentTop(this._header_height), this._onScroll(), this
        }),
        (s.prototype.currentPosition = function() {
          return Math.round(this._$content.position().top)
        }),
        (s.prototype.atStart = function() {
          return Math.round(this._$content.position().top) >= this._header_height
        }),
        (s.prototype.atEnd = function(t) {
          var e, i, s, o
          return (
            ('number' == typeof t && isFinite(t)) || (t = 0),
            (e = 1),
            (i = Math.round(this._$content.position().top)),
            (s = this._$content.outerHeight()),
            (o = this._$wrapper.outerHeight()),
            s - Math.abs(i) - e <= o + t
          )
        }),
        (s.prototype._onScroll = function(t) {
          var e, i
          return (
            this._touch || this._$content.css('bottom', 'auto'),
            this.scrolled.fire(),
            (this._dragging && !0 !== t) || this.updateScrollBar(),
            (e = this.atStart()),
            (i = this.atEnd()),
            this._$shadowTop && this._$shadowTop.toggleClass('i-invisible', !!e),
            this._$shadowBottom && this._$shadowBottom.toggleClass('i-invisible', !!i),
            this._onContentVisible(),
            !this._atStart && e
              ? ((this._atStart = !0), this.scrolltostart.fire())
              : this._atStart && !e && delete this._atStart,
            !this._atEnd && i
              ? ((this._atEnd = !0), this.scrolltoend.fire())
              : this._atEnd && !i && delete this._atEnd,
            this._options.vAlignBottom &&
              (this._stickyBottom =
                this._$content.outerHeight() -
                Math.abs(this._$content.position().top) -
                this._$wrapper.outerHeight()),
            !(
              (!this._atStart && !this._atEnd) ||
              ('function' == typeof this._options.bubbleScrollEvent
                ? !this._options.bubbleScrollEvent()
                : !this._options.bubbleScrollEvent)
            )
          )
        }),
        (s.prototype.checkContentVisibility = function() {
          this._onContentVisible()
        }),
        (s.prototype.subscribeToContentVisible = function(t, e, i) {
          this.visibilityCallbacks.push({ id: t, $el: e, callback: i })
        }),
        (s.prototype.triggerVisibilityCallbacks = function(t) {
          this._onContentVisible(t)
        }),
        (s.prototype._contentIsVisible = function(t) {
          return t.$el.position().top > -1 * this.currentPosition()
        }),
        (s.prototype._onContentVisible = function(t) {
          var e, i, s
          this.visibilityCallbacks.length &&
            ((e = t || this._contentIsVisible.bind(this)),
            (i = []),
            (s = this.visibilityCallbacks.filter(function(t, s) {
              if (!$.contains(this._$content, t.$el[0])) return !1
              var o = e(t)
              return o && i.push(s), !o
            }, this)),
            i.forEach(function(e) {
              this.visibilityCallbacks[e].callback(!!t)
            }, this),
            delete this.visibilityCallbacks,
            (this.visibilityCallbacks = s))
        }),
        (s.prototype.save = function() {
          return (
            (this._saved = {
              top: this._$content.position().top,
              height: this._$content.outerHeight(),
            }),
            this
          )
        }),
        (s.prototype.restore = function() {
          if (this._saved) {
            if (
              this._saved.top === this._$content.position().top &&
              this._saved.height === this._$content.outerHeight()
            )
              return delete this._saved, this
            this._options.vAlignBottom &&
              ((this._saved.top -= this._$content.outerHeight() - this._saved.height),
              this._saved.top > this._header_height && (this._saved.top = this._header_height)),
              this.setContentTop(this._saved.top),
              delete this._saved,
              this._onScroll(!0)
          }
          return this
        }),
        (s.prototype.fixBottom = function() {
          var t, e
          return this._bottomFixed
            ? this
            : (this._touch
                ? ((t = this._$content.outerHeight()),
                  (e = this._$wrapper.scrollTop()),
                  (this._tempIntervalID = setInterval(
                    function() {
                      this._$wrapper.scrollTop(e + (this._$content.outerHeight() - t))
                    }.bind(this),
                    0,
                  )))
                : this._$content.css({
                    top: 'auto',
                    bottom:
                      this._$wrapper.outerHeight() -
                      this._$content.position().top -
                      this._$content.outerHeight(),
                  }),
              (this._bottomFixed = !0),
              this)
        }),
        (s.prototype.releaseBottom = function() {
          return this._bottomFixed
            ? (this._touch
                ? clearInterval(this._tempIntervalID)
                : this._$content.css({ top: this._$content.position().top, bottom: 'auto' }),
              delete this._bottomFixed,
              this._onScroll(),
              this)
            : this
        }),
        (s.prototype.setContentTop = function(t) {
          return (
            this._touch
              ? this._options.vAlignBottom &&
                this._$content.outerHeight() < this._$wrapper.outerHeight()
                ? (this._$wrapper.css('overflow-y', 'visible'),
                  this._$content.css({ position: 'absolute', bottom: 0 }))
                : (this._$content.css({ position: 'relative', bottom: 'auto' }),
                  this._$wrapper.css('overflow-y', 'auto'),
                  this._$wrapper.scrollTop(-t))
              : this._$content.css('top', t),
            this
          )
        }),
        (s.prototype.isContentShort = function() {
          return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
        }),
        (s.prototype.destroy = function() {
          this._$scrollBarWrapper.remove(),
            this._$shadowBottom && this._$shadowBottom.remove(),
            this._$shadowTop && this._$shadowTop.remove(),
            this._$wrapper
              .attr('style', '')
              .off('mouseenter.sidebar-scroll')
              .off('mouseleave.sidebar-scroll')
              .off('mousewheel.sidebar-scroll'),
            this._$content.attr('style', '')
        }),
        (e.SidebarCustomScroll = s)
    }.call(e, i(8)))
  },
  834: function(t, e) {},
  837: function(t, e, i) {
    'use strict'
    ;(function(t) {
      function s(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function o(t) {
        var e, i
        if (t && t.__esModule) return t
        if (((e = {}), null != t))
          for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        return (e.default = t), e
      }
      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function a(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
      }
      function l() {
        return 0 !== S.length
      }
      var c, h, d, u, p, _, g, f, v, y, b, m, S, C
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TVModal = void 0),
        (c =
          Object.assign ||
          function(t) {
            var e, i, s
            for (e = 1; e < arguments.length; e++) {
              i = arguments[e]
              for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
            }
            return t
          }),
        (h = (function() {
          function t(t, e) {
            var i, s
            for (i = 0; i < e.length; i++)
              (s = e[i]),
                (s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                'value' in s && (s.writable = !0),
                Object.defineProperty(t, s.key, s)
          }
          return function(e, i, s) {
            return i && t(e.prototype, i), s && t(e, s), e
          }
        })()),
        (e.isOpenedModals = l),
        (d = i(184)),
        (u = o(d)),
        (p = i(832)),
        (_ = s(p)),
        (g = i(690)),
        (f = i(305)),
        (v = i(189)),
        (y = o(v)),
        (b = i(307)),
        (m = o(b)),
        (S = []),
        (C = {
          ajax: {},
          closingDuration: u.dur / 2,
          overlayTemplate: '<div class="tv-dialog__overlay"></div>',
          containerTemplate:
            '<div class="tv-dialog__modal-wrap"><div class="tv-dialog__modal-container"><div class="tv-dialog__modal-body"></div></div></div>',
          ajaxErrorTemplate:
            '<div class="tv-dialog__error js-dialog__close">' + $.t('Error') + '</div>',
        }),
        (e.TVModal = (function(e) {
          function i() {
            var t,
              e,
              s,
              o,
              a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return (
              n(this, i),
              (t = r(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, c({}, C, a)))),
              (t.$overlay = $(t.options.overlayTemplate)),
              (t.$modalWrap = $(t.options.containerTemplate)),
              (t.$body = t.$modalWrap.find('.tv-dialog__modal-body').append(t.$el)),
              t.options.closeOnOutsideClick &&
                t.$overlay.add(t.$modalWrap).click(function(e) {
                  t.isEventOut(e) && t.close()
                }),
              t.on('change:zIndex', function() {
                t.$overlay.css('z-index', t.zIndex), t.$modalWrap.css('z-index', t.zIndex)
              }),
              t.on('destroy', function() {
                var e = function() {
                  t.$overlay.remove(), t.$modalWrap.remove()
                }
                t.opened ? (t.close(), setTimeout(e, t.options.closingDuration)) : e()
              }),
              t.on('beforeOpen', function() {
                S.push(t)
              }),
              t.options.ajax.url &&
                ((e = t.options.ajax.beforeSend || $.noop),
                (s = t.options.ajax.success || !1),
                (o = t.options.ajax.error || $.noop),
                $.extend(t.options.ajax, {
                  beforeSend: function() {
                    t.trigger('beforeLoading', [t]), t.startSpinner(), e(t)
                  },
                  success: function(e) {
                    t.trigger('afterLoading', [t]),
                      t.renderContent(s ? s(t, e) : e).showContent(),
                      t.trigger('afterLoadingShow', [t])
                  },
                  error: function() {
                    t.renderContent(t.options.ajaxErrorTemplate),
                      o(t),
                      t.trigger('errorLoading', [t])
                  },
                })),
              t.on('error', function(e, i) {
                t.$modalWrap[0].getBoundingClientRect().height <
                  t.$content[0].getBoundingClientRect().height &&
                  i.addClass('i-fixed').css({ width: t.$el.width() })
              }),
              (t._shortCutsLockId = null),
              (t._keyboardBinderLockId = null),
              t
            )
          }
          return (
            a(i, e),
            h(i, [
              {
                key: 'open',
                value: function() {
                  var t,
                    e = this
                  if (!this.opened)
                    return (
                      (this.opened = !0),
                      (this._shortCutsLockId = y.disable()),
                      (this._keyboardBinderLockId = m.disable()),
                      _.default.setFixedBodyState(!0),
                      (t = function() {
                        e.focus(),
                          e.toTop(),
                          $('body')
                            .append(
                              e.$overlay.addClass('i-hidden i-closed').css('z-index', e.zIndex),
                            )
                            .append(
                              e.$modalWrap.addClass('i-hidden i-closed').css('z-index', e.zIndex),
                            ),
                          e.trigger('beforeOpen', [e]),
                          e.$overlay.removeClass('i-hidden'),
                          setTimeout(function() {
                            e.$overlay.removeClass('i-closed')
                          }, 20),
                          e.options.ajax.url
                            ? (e.ajaxRequest = $.ajax(e.options.ajax))
                            : e.showContent()
                      }),
                      _.default.isMobileSafari
                        ? setTimeout(function() {
                            return t()
                          }, 50)
                        : t(),
                      this
                    )
                },
              },
              {
                key: 'close',
                value: function() {
                  var e = this
                  if (this.opened)
                    return (
                      (this.opened = !1),
                      this._shortCutsLockId && y.enable(this._shortCutsLockId),
                      this._keyboardBinderLockId && m.enable(this._keyboardBinderLockId),
                      this.trigger('beforeClose', [this]),
                      this.ajaxRequest && (this.ajaxRequest.abort(), delete this.ajaxRequest),
                      this.hideContent(),
                      this.$overlay.addClass('i-closed'),
                      setTimeout(function() {
                        e.$modalWrap.addClass('i-hidden').detach(),
                          e.$overlay.addClass('i-hidden').detach(),
                          (S = t.without(S, e)),
                          _.default.setFixedBodyState(!1),
                          e.trigger('afterClose', [e]),
                          e.unfocus(),
                          S.length > 0 && S[S.length - 1].focus(),
                          e.options.destroyOnClose && e.destroy()
                      }, this.options.closingDuration),
                      this
                    )
                },
              },
              {
                key: 'showContent',
                value: function() {
                  var t = this
                  return (
                    this.$modalWrap.removeClass('i-hidden'),
                    setTimeout(function() {
                      t.$modalWrap.removeClass('i-closed')
                    }, 20),
                    setTimeout(function() {
                      t.trigger('afterOpen', [t]), t.spinner && t.stopSpinner()
                    }, 0.75 * u.dur + 20),
                    this
                  )
                },
              },
              {
                key: 'hideContent',
                value: function() {
                  if (this.$el) return this.$modalWrap.addClass('i-closed'), this.unfocus(), this
                },
              },
              {
                key: 'startSpinner',
                value: function() {
                  return (
                    (this.spinner = new f.Spinner('large')),
                    this.spinner.spin(this.$overlay[0]),
                    this
                  )
                },
              },
              {
                key: 'stopSpinner',
                value: function() {
                  if (this.spinner) return this.spinner.stop(), delete this.spinner, this
                },
              },
            ]),
            i
          )
        })(g.TVDialogAbstract))
    }.call(e, i(187)))
  },
  838: function(t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      i.d(e, 'breakpoints', function() {
        return s
      })
    var s = { desktop: 1 / 0, desktopHd: 1919, phone: 767, 'phone-vertical': 479, tablet: 1019 }
  },
  839: function(t, e, i) {
    'use strict'
    ;(function(t, s) {
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function n(t) {
        var e, i
        if (t && t.__esModule) return t
        if (((e = {}), null != t))
          for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        return (e.default = t), e
      }
      function r(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function a(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function l(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
      }
      function c() {
        b.forEach(function(t) {
          return t.close()
        })
      }
      var h, d, u, p, _, g, f, v, y, b, m, S, C, w, T, E, A
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TVDialogAbstract = void 0),
        (h =
          Object.assign ||
          function(t) {
            var e, i, s
            for (e = 1; e < arguments.length; e++) {
              i = arguments[e]
              for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
            }
            return t
          }),
        (d = (function() {
          function t(t, e) {
            var i, s
            for (i = 0; i < e.length; i++)
              (s = e[i]),
                (s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                'value' in s && (s.writable = !0),
                Object.defineProperty(t, s.key, s)
          }
          return function(e, i, s) {
            return i && t(e.prototype, i), s && t(e, s), e
          }
        })()),
        (e.closeAllDialogs = c),
        (u = i(184)),
        (p = n(u)),
        i(840),
        (_ = i(308)),
        (g = o(_)),
        i(841),
        i(842),
        i(834),
        (f = i(301)),
        (v = o(f)),
        (y = 0),
        (b = []),
        (m = void 0),
        (S = 110),
        (C = $(document)),
        (w = {
          closeOnEsc: !0,
          closeButton: !0,
          focusFirstControl: !0,
          closeOnOutsideClick: !0,
          closeButtonAddClass: '',
          focusClass: 'i-focused',
          template: '<div class="tv-dialog">',
          errorTemplate:
            '<div class="tv-dialog__error i-slided{{# errorMod }} tv-dialog__error--{{ errorMod }}{{/ errorMod }}">{{{ error }}}</div>',
          titleTemplate:
            '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag"><div class="js-title-text tv-dialog__title">{{{ title }}}</div></div>',
          contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border">',
          actionsWrapTemplate:
            '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
          closeButtonTemplate:
            '<div class="tv-dialog__close js-dialog__close">' + i(828) + '</div>',
          helpButtonTemplate:
            '<a href="{{{ link }}}" target="_blank" class="tv-dialog__help apply-common-tooltip" title="{{{ title }}}"></a>',
          helpActionsMod: 'tv-dialog__section--actions_with-help',
        }),
        (T = {
          default: 'tv-button tv-button--default',
          primary: 'tv-button tv-button--primary',
          success: 'tv-button tv-button--success',
          danger: 'tv-button tv-button--danger',
          warning: 'tv-button tv-button--warning',
          link: 'tv-button tv-button--link',
          checkbox: 'tv-control-checkbox tv-control-checkbox--in-actions',
          'default-ghost': 'tv-button tv-button--default_ghost',
          'primary-ghost': 'tv-button tv-button--primary_ghost',
          'success-ghost': 'tv-button tv-button--success_ghost',
          'danger-ghost': 'tv-button tv-button--danger_ghost',
          'warning-ghost': 'tv-button tv-button--warning_ghost',
        }),
        (E = {
          _default:
            '<div data-name="{{ name }}" class="js-dialog__action-click js-dialog__no-drag {{ class }}">{{ text }}</div>',
          'submit-success':
            '<button type="submit" class="tv-button tv-button--success">{{ text }}</button>',
        }),
        $(function() {
          w.$wrap = $(document.all && !document.querySelector ? 'html' : 'body')
        }),
        (A = (function(e) {
          function i() {
            var e,
              s,
              o,
              n,
              l,
              c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            for (
              r(this, i),
                e = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this)),
                e._id = y++,
                e.loadingActions = [],
                e.disabledActions = [],
                e.firstFocusControl = null,
                e.options = h({}, w, c),
                e.$el = $(
                  t.render(e.options.template, {
                    title: e.options.title,
                    closeButton: e.options.closeButton,
                  }),
                ),
                e.$el.addClass('js-dialog'),
                e.el = e.$el[0],
                e.options.addClass && e.$el.addClass(e.options.addClass),
                e.options.width && e.$el.css({ width: '100%', 'max-width': e.options.width }),
                e.options.title &&
                  (e.$title = $(
                    t.render(e.options.titleTemplate, { title: e.options.title }),
                  ).appendTo(e.$el)),
                e.$content = $(e.options.contentWrapTemplate).appendTo(e.$el),
                e.$contentIn = e.$content;
              e.$contentIn.length;

            )
              e.$contentIn = e.$contentIn.children()
            if (
              ((e.$contentIn = e.$contentIn.end()),
              e.options.content && e.renderContent(e.options.content),
              (e.options.actions || e.options.help) &&
                (e.$content.hasClass('tv-dialog__section') &&
                  e.$content.addClass('tv-dialog__section--no-padding_bottom'),
                (e.$actions = $(e.options.actionsWrapTemplate).appendTo(e.$el))),
              e.options.actions)
            )
              for (
                e.actions = {},
                  e.$el.on('click touchend', '.js-dialog__action-click', function(t) {
                    t.preventDefault(), e.actionDispatcher($(t.currentTarget).data('name'))
                  }),
                  s = function(i) {
                    var s,
                      o,
                      n,
                      r,
                      a,
                      l,
                      c = e.options.actions[i]
                    c.type || (c.type = 'default'),
                      c.class || (c.class = T[c.type] ? T[c.type] : T.default),
                      'checkbox' === c.type
                        ? ((s = new g.default({
                            labelRight: c.text,
                            name: c.name,
                            checked: c.checked,
                          })),
                          (e.actions[c.name] = s.$el.appendTo(e.$actions)),
                          e.actions[c.name].on('change', function() {
                            setTimeout(function() {
                              return e.actionDispatcher(c.name, s.checked)
                            })
                          }))
                        : (e.actions[c.name] = $(
                            t.render(c.template ? c.template : E[c.type] || E._default, c, c),
                          ).appendTo(e.$actions)),
                      c.method &&
                        'function' == typeof e[c.method] &&
                        e.on('action:' + c.name, e[c.method].bind(e)),
                      c.addClass && e.actions[c.name].addClass(c.addClass),
                      c.key &&
                        ((o = void 0),
                        'string' == typeof c.key && c.key.split('+').length > 1
                          ? ((n = []),
                            (r = c.key.split('+')),
                            (o = function(t) {
                              n = []
                            }),
                            (a = function(t) {
                              var i = '' + t.keyCode
                              ;-1 !== r.indexOf(i) && n.indexOf(i) && n.push(i),
                                e._focused &&
                                  n.length === r.length &&
                                  ((n = []), e.actionDispatcher(c.name))
                            }),
                            e.on('afterOpen', function() {
                              C.on('keydown', a), C.on('keyup', o)
                            }),
                            e.on('beforeClose', function() {
                              C.off('keydown', a), C.off('keyup', o)
                            }))
                          : ((l = $.isArray(c.key) ? c.key : [c.key]),
                            (o = function(t) {
                              !t.isDefaultPrevented() &&
                                e._focused &&
                                -1 !== l.indexOf(t.keyCode) &&
                                e.actionDispatcher(c.name)
                            }),
                            e.on('afterOpen', function() {
                              return C.on('keyup', o)
                            }),
                            e.on('beforeClose', function() {
                              return C.off('keyup', o)
                            })))
                  },
                  o = e.options.actions.length - 1;
                o >= 0;
                o--
              )
                s(o)
            return (
              e.options.help &&
                $(t.render(e.options.helpButtonTemplate, e.options.help)).prependTo(
                  e.$actions.addClass(e.options.helpActionsMod),
                ),
              e.options.closeButton &&
                ((n = $(e.options.closeButtonTemplate)),
                n.addClass(e.options.closeButtonAddClass || ''),
                (l = e.$el),
                1 === e.$el.find('.js-close-button-place').length &&
                  (l = e.$el.find('.js-close-button-place')),
                n.appendTo(l)),
              e.setZIndex(S + b.length),
              c.errorMod && (e.errorMod = c.errorMod),
              e.on('afterOpen', function() {
                e.options.focusFirstControl &&
                  !Modernizr.touch &&
                  (
                    e.firstFocusControl ||
                    e.$el.find('input:not([type="hidden"]), textarea').first()
                  ).focus()
              }),
              e.$el.on('click touchend', '.js-dialog__close', e.close.bind(e)),
              e.$el.on('mousedown touchstart', e.focus.bind(e)),
              b.push(e),
              e
            )
          }
          return (
            l(i, e),
            d(i, [
              {
                key: 'renderContent',
                value: function(t) {
                  return this.$contentIn.html('function' == typeof t ? t(this) : t), this
                },
              },
              {
                key: 'setDestroyOnClose',
                value: function(t) {
                  this.options.destroyOnClose = t
                },
              },
              {
                key: 'setZIndex',
                value: function(t) {
                  return (this.zIndex = t), this.trigger('change:zIndex', [this]), this
                },
              },
              {
                key: 'toTop',
                value: function() {
                  for (var t = b.length - 1; t >= 0; t--)
                    b[t].zIndex > this.zIndex && b[t].setZIndex(b[t].zIndex - 1)
                  return this.setZIndex(S + b.length), this
                },
              },
              {
                key: 'isEventOut',
                value: function(t) {
                  var e, i, s
                  return this.options.isClickOutFn && void 0 !== (e = this.options.isClickOutFn(t))
                    ? e
                    : ((i = !0),
                      (s = $(t.target)),
                      s.get(0) !== this.$el.get(0) &&
                        ($('>*', this.$el).each(function() {
                          s.get(0) === $(this).get(0) && (i = !1),
                            0 === s.closest('HTML', $(this).get(0)).length && (i = !1)
                        }),
                        i))
                },
              },
              {
                key: 'focus',
                value: function() {
                  var t = this
                  m && m !== this && m.unfocus(),
                    this._setFocused(),
                    (this._focused = !0),
                    this.$el.addClass(this.options.focusClass),
                    this.trigger('focus', [this]),
                    setTimeout(function() {
                      C.on('mousedown.tv-dialog-unfocus-' + t._id, function(e) {
                        t.isEventOut(e) &&
                          (t.unfocus(), C.off('mousedown.tv-dialog-unfocus-' + t._id))
                      })
                    }, 20)
                },
              },
              {
                key: '_setFocused',
                value: function() {
                  m !== this && (m = this)
                },
              },
              {
                key: '_setUnfocused',
                value: function() {
                  m === this && (m = void 0)
                },
              },
              {
                key: 'unfocus',
                value: function() {
                  m === this &&
                    (this._setUnfocused(),
                    (this._focused = !1),
                    this.$el
                      .removeClass(this.options.focusClass)
                      .find(':focus')
                      .blur(),
                    this.trigger('unfocus', [this]))
                },
              },
              {
                key: 'isFocused',
                value: function() {
                  return this._focused
                },
              },
              {
                key: 'setTitle',
                value: function(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  return (
                    this.$title.toggleClass(
                      'tv-dialog__section--one-line apply-overflow-tooltip',
                      e,
                    ),
                    this.$title.html(t),
                    this
                  )
                },
              },
              {
                key: 'setTitleText',
                value: function(t) {
                  this.$title.find('.js-title-text').text(t)
                },
              },
              {
                key: 'actionDispatcher',
                value: function(t) {
                  if (!this.disabledActions.includes(t) && !this.loadingActions.includes(t)) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                      i[s - 1] = arguments[s]
                    this.trigger('action:' + t, [this].concat(i))
                  }
                },
              },
              {
                key: 'toggleAction',
                value: function(t, e) {
                  return (
                    !e && this.disabledActions.includes(t)
                      ? this.disabledActions.push(t)
                      : e &&
                        this.disabledActions.includes(t) &&
                        (this.disabledActions = s.without(this.disabledActions, t)),
                    this.actions[t].toggleClass('i-disabled', !e),
                    this
                  )
                },
              },
              {
                key: 'actionLoader',
                value: function(t) {
                  var e = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'init'
                  return (
                    this.actions[t].tvButtonLoader(i),
                    'init' === i &&
                      (this.actions[t]
                        .off('tv-button-loader:start.dialog-action')
                        .on('tv-button-loader:start.dialog-action', function() {
                          e.loadingActions.push(t)
                        }),
                      this.actions[t]
                        .off('tv-button-loader:stop.dialog-action')
                        .on('tv-button-loader:stop.dialog-action', function() {
                          e.loadingActions = s.without(e.loadingActions, t)
                        })),
                    this
                  )
                },
              },
              {
                key: 'error',
                value: function(e) {
                  var i = $(
                      t.render(this.options.errorTemplate, { error: e, errorMod: this.errorMod }),
                    ).appendTo(this.$el),
                    s = function() {
                      i.addClass('i-slided'),
                        setTimeout(function() {
                          return i.remove()
                        }, 0.75 * p.dur)
                    }
                  return (
                    setTimeout(function() {
                      return i.removeClass('i-slided')
                    }, 20),
                    C.one('touchstart mousedown keydown', s),
                    this.trigger('error', [this, i]),
                    this
                  )
                },
              },
              {
                key: 'destroy',
                value: function() {
                  b = s.without(b, this)
                  for (var t = 0; t < b.length; t++) b[t].setZIndex(S + t)
                  this.trigger('destroy', [this])
                },
              },
              {
                key: 'isOpened',
                value: function() {
                  return !!this.opened
                },
              },
            ]),
            i
          )
        })(v.default)),
        (e.TVDialogAbstract = A),
        C.on('keyup.tv-dialog-esc', function(t) {
          m &&
            m.options.closeOnEsc &&
            !$('.tv-dropdown__body.i-opened').length &&
            !$(t.target).closest('.js-dialog-skip-escape').length &&
            27 === t.keyCode &&
            m.close()
        })
    }.call(e, i(126), i(187)))
  },
  840: function(t, e, i) {
    'use strict'
    function s(t) {
      var e, i
      if (t && t.__esModule) return t
      if (((e = {}), null != t))
        for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      return (e.default = t), e
    }
    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    var n, r, a, l, c
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ButtonLoader = void 0),
      (n = (function() {
        function t(t, e) {
          var i, s
          for (i = 0; i < e.length; i++)
            (s = e[i]),
              (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(t, s.key, s)
        }
        return function(e, i, s) {
          return i && t(e.prototype, i), s && t(e, s), e
        }
      })()),
      (r = i(309)),
      (a = i(184)),
      (l = s(a)),
      ($.fn.tvButtonLoader = (0, r.createTvBlockWithInstance)('tv-button-loader', function(t, e) {
        return new c(t, e)
      })),
      (c = e.ButtonLoader = (function() {
        function t(e, i) {
          o(this, t),
            (this.$btn = $(e).addClass('tv-button--loader')),
            0 === this.$btn.find('.tv-button__loader').length &&
              this.$btn.html(
                '<span class="tv-button__text">' +
                  this.$btn.html() +
                  '</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span>',
              ),
            (this.loading = this.$btn.hasClass('i-loading'))
        }
        return (
          n(t, [
            {
              key: '_start',
              value: function() {
                var t = this
                ;(this.starting = !0),
                  this.$btn.addClass('i-start-load'),
                  this.$btn.trigger('tv-button-loader:start'),
                  setTimeout(function() {
                    ;(t.loading = !0),
                      (t.starting = !1),
                      (t._startPromise = !1),
                      t.$btn.addClass('i-loading'),
                      t.$btn.removeClass('i-start-load'),
                      t._stopPromise && t._stop()
                  }, 2 * l.dur)
              },
            },
            {
              key: 'start',
              value: function() {
                this.starting || (this.stopping ? (this._startPromise = !0) : this._start())
              },
            },
            {
              key: '_stop',
              value: function() {
                var t = this
                ;(this.stopping = !0),
                  this.$btn.addClass('i-stop-load'),
                  this.$btn.trigger('tv-button-loader:stop'),
                  setTimeout(function() {
                    ;(t.loading = !1),
                      (t.stopping = !1),
                      (t._stopPromise = !1),
                      t.$btn.removeClass('i-loading i-start-load i-stop-load'),
                      t._startPromise && t._start()
                  }, l.dur)
              },
            },
            {
              key: 'stop',
              value: function() {
                this.stopping || (this.starting ? (this._stopPromise = !0) : this._stop())
              },
            },
            {
              key: 'toggle',
              value: function() {
                this.loading ? this.stop() : this.start()
              },
            },
            {
              key: 'contentHtml',
              value: function(t) {
                return t
                  ? (this.$btn.find('.tv-button__text').html(t), t)
                  : this.$btn.find('.tv-button__text').html()
              },
            },
            {
              key: 'contentNojQuery',
              value: function() {
                return this.$btn.get(0)
              },
            },
            {
              key: 'disable',
              value: function() {
                this.stop(), this.$btn.addClass('i-disabled')
              },
            },
            {
              key: 'enable',
              value: function() {
                this.$btn.removeClass('i-disabled')
              },
            },
          ]),
          t
        )
      })())
  },
  841: function(t, e) {},
  842: function(t, e) {},
  843: function(t, e, i) {
    'use strict'
    function s(t) {
      return t && t.__esModule ? t : { default: t }
    }
    function o(t) {
      var e, i
      if (t && t.__esModule) return t
      if (((e = {}), null != t))
        for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      return (e.default = t), e
    }
    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
    }
    function a(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
      ;(t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
    }
    var l, c, h, d, u, p, _, g, f, v, y, b, m
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TVPopup = void 0),
      (l =
        Object.assign ||
        function(t) {
          var e, i, s
          for (e = 1; e < arguments.length; e++) {
            i = arguments[e]
            for (s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
          }
          return t
        }),
      (c = (function() {
        function t(t, e) {
          var i, s
          for (i = 0; i < e.length; i++)
            (s = e[i]),
              (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(t, s.key, s)
        }
        return function(e, i, s) {
          return i && t(e.prototype, i), s && t(e, s), e
        }
      })()),
      (h = i(184)),
      (d = o(h)),
      (u = i(832)),
      (p = s(u)),
      (_ = i(690)),
      (g = i(833)),
      (f = i(827)),
      (v = $('body')),
      (y = $(window)),
      (b = {
        closeOnClickAtOtherDialogs: !0,
        draggable: !0,
        scrollWrap: '<div class="tv-dialog__scroll-wrap">',
        scrollWrapInner: '<div class="tv-dialog__scroll-wrap-inner">',
        withScroll: !0,
      }),
      (m = 'js-dialog__scroll-wrap'),
      (e.TVPopup = (function(t) {
        function e() {
          var t,
            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (
            n(this, e),
            (t = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, l({}, b, i)))),
            (t.$scrollWrap = t.$content.hasClass(m) ? t.$content : t.$content.find('.' + m)),
            t.$scrollWrap.length
              ? (t.$scrollWrapInner = t.$scrollWrap.children().first())
              : ((t.$scrollWrap = t.$content.wrap($(t.options.scrollWrap)).parent()),
                (t.$scrollWrapInner = t.$content.wrap($(t.options.scrollWrapInner)).parent())),
            t.$actions && t.$scrollWrap.addClass('i-with-actions'),
            t.options.withScroll &&
              ((t.scroll = new g.SidebarCustomScroll(t.$scrollWrap, t.$scrollWrapInner)),
              t.scroll.scrolled.subscribe(null, function() {
                return t.trigger('scroll')
              })),
            t.$scrollWrap.css('overflow', ''),
            t.$el.addClass('tv-dialog--popup i-closed i-hidden'),
            t.options.width &&
              t.$el.css({ width: 'calc(100% - 20px)', 'max-width': t.options.width }),
            t.$el.on('mousedown touchstart', t.toTop.bind(t)),
            t.options.closeOnOutsideClick &&
              (t.on('beforeOpen', function() {
                setTimeout(function() {
                  t.opened &&
                    $(document).on('click.tv-popup-' + t.id, function(e) {
                      var i = $(e.target).closest('.js-dialog')
                      ;(t.options.closeOnClickAtOtherDialogs || 0 === i.length) &&
                        t.isEventOut(e) &&
                        t.close()
                    })
                }, 0)
              }),
              t.on('beforeClose', function() {
                return $(document).off('click.tv-popup-' + t.id)
              })),
            t.on('change:zIndex', function() {
              t.$el.css('z-index', t.zIndex)
            }),
            t.on('destroy', function() {
              var e = function() {
                t.$el.remove()
              }
              t.opened ? (t.close(), setTimeout(e, d.dur / 2)) : e()
            }),
            t
          )
        }
        return (
          a(e, t),
          c(e, [
            {
              key: 'open',
              value: function() {
                var t = this
                return this.opened
                  ? this
                  : ((this.opened = !0),
                    this.trigger('beforeOpen', [this]),
                    this.$el
                      .appendTo(this.options.$wrap)
                      .removeClass('i-hidden')
                      .css(
                        (function() {
                          var e, i, s, o, n
                          return (
                            t.calcHeight(),
                            (e = y.height()),
                            (i = y.width()),
                            (s = t.$el.height()),
                            (o = t.$el.width()),
                            (n = t.options.position),
                            n || (n = { top: e / 2 - s / 2, left: i / 2 - o / 2 }),
                            n.top > e - s && (n.top = e - s),
                            n.left > i - o && (n.left = i - o),
                            n
                          )
                        })(),
                      ),
                    this.focus(),
                    this.toTop(),
                    this._doOpenAnimation().then(function() {
                      t.opened &&
                        (t.$el.removeClass('i-closed'),
                        t.options.draggable &&
                          ((0, f.lazyJqueryUI)(t.$el).draggable({
                            handle: '.js-dialog__drag',
                            cancel:
                              'input, textarea, button, select, option, .js-dialog__no-drag, .js-dialog__close',
                            containment: 'window',
                            cursor: '-webkit-grabbing',
                          }),
                          t.$el.find('.js-dialog__drag').addClass('tv-dialog__grab')),
                        t.trigger('afterOpen', [t]))
                    }),
                    y.on('resize.tv-popup-' + this.id, function() {
                      t.calcHeight(), t.fixPos()
                    }),
                    this)
              },
            },
            {
              key: 'close',
              value: function() {
                var t = this
                if (this.opened)
                  return (
                    this.trigger('beforeClose', [this]),
                    this.$el.addClass('i-closed'),
                    (this.opened = !1),
                    this._doCloseAnimation().then(function() {
                      t.opened ||
                        ((0, f.lazyJqueryUI)(t.$el)
                          .draggable('instance')
                          .then(function(t) {
                            t && t.destroy()
                          }),
                        t.$el.addClass('i-hidden').detach(),
                        v.css('cursor', 'auto'),
                        t.trigger('afterClose', [t]),
                        t.options.destroyOnClose && t.destroy())
                    }),
                    y.off('resize.tv-popup-' + this.id),
                    this
                  )
              },
            },
            {
              key: 'hide',
              value: function() {
                this.$el.addClass('i-hidden')
              },
            },
            {
              key: 'show',
              value: function() {
                this.$el.removeClass('i-hidden')
              },
            },
            {
              key: 'fixPos',
              value: function() {
                var t = this.$el[0].getBoundingClientRect(),
                  e = {}
                t.bottom > p.default.height - 10 &&
                  ((e.top = p.default.height - 10 - t.height), e.top < 10 && (e.top = 10)),
                  t.right > p.default.width - 10 &&
                    ((e.left = p.default.width - 10 - t.width), e.left < 10 && (e.left = 10)),
                  (e.top || e.left) && this.$el.css(e)
              },
            },
            {
              key: 'calcHeight',
              value: function() {
                var t,
                  e,
                  i = this.$el[0].getBoundingClientRect(),
                  s = this.$scrollWrapInner[0].getBoundingClientRect(),
                  o = this.$scrollWrap[0].getBoundingClientRect(),
                  n =
                    this.options.height && this.options.height < p.default.height - 20
                      ? this.options.height
                      : p.default.height - 20
                this.$scrollWrap.css({ height: '' }).removeClass('i-scrollable'),
                  (t = this.$el[0].getBoundingClientRect()),
                  (this.options.height || t.height > n) &&
                    ((n -= i.height - o.height),
                    n < 60 && (n = 60),
                    this.$scrollWrap.css({ height: n })),
                  this.options.withScroll && this.scroll.resize(),
                  (e = n < s.height),
                  e || this.$scrollWrapInner.css('top', 0),
                  this.$scrollWrap.toggleClass('i-scrollable', e),
                  this.$actions &&
                    this.$actions.toggleClass('tv-dialog__section--actions_with-border', e)
              },
            },
            {
              key: 'updateScroll',
              value: function() {
                this.scroll && (this.scroll.updateScroll(), this.scroll.updateScrollBar())
              },
            },
            {
              key: 'scrollToStart',
              value: function() {
                this.scroll && this.scroll.scrollToStart()
              },
            },
            {
              key: '_doOpenAnimation',
              value: function() {
                return Promise.resolve()
              },
            },
            {
              key: '_doCloseAnimation',
              value: function() {
                return Promise.resolve()
              },
            },
          ]),
          e
        )
      })(_.TVDialogAbstract))
  },
  869: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill-rule="evenodd" d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
  },
  870: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M9.901 9.639c-.102-.797.218-1.775.77-2.356l1.438-1.527-2.07-.395c-.784-.142-1.615-.742-2.008-1.446L7.003 2.06 5.97 3.917c-.391.702-1.222 1.301-2 1.443l-2.08.396 1.44 1.526c.547.577.866 1.549.77 2.353l-.262 2.086 1.93-.897a2.95 2.95 0 0 1 1.233-.254c.44 0 .87.085 1.233.254l1.93.897-.263-2.082zm.992-.127l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
  },
  873: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>'
  },
  876: function(t, e) {},
})
