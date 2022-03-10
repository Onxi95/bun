import {
__require as require
} from "http://localhost:3000/bun:wrap";
import {
__HMRClient as Bun
} from "http://localhost:3000/bun:wrap";
import {
__FastRefreshModule as FastHMR
} from "http://localhost:3000/bun:wrap";
import {
__FastRefreshRuntime as FastRefresh
} from "http://localhost:3000/bun:wrap";
Bun.activate(true);

var hmr = new FastHMR(2398506918, "caught-require.js", FastRefresh), exports = hmr.exports;
await (hmr._load = async function() {
  try {
    require((() => { throw (new Error(`Cannot require module '"this-package-should-not-exist"'`)); } )());
  } catch (exception) {
  }
  try {
    await import("this-package-should-not-exist");
  } catch (exception) {
  }
  import("this-package-should-not-exist").then(() => {
  }, () => {
  });
  async function test() {
    try {
      require((() => { throw (new Error(`Cannot require module '"this-package-should-not-exist"'`)); } )());
    } catch (exception) {
    }
    try {
      await import("this-package-should-not-exist");
    } catch (exception) {
    }
    import("this-package-should-not-exist").then(() => {
    }, () => {
    });
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    test: () => test
  });
})();
var $$hmr_test = hmr.exports.test;
hmr._update = function(exports) {
  $$hmr_test = exports.test;
};

export {
  $$hmr_test as test
};

//# sourceMappingURL=http://localhost:3000/caught-require.js.map
