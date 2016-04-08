import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import MahasiswaView from 'views/MahasiswaView/MahasiswaView'
import AddMahasiswaView from 'views/MahasiswaView/AddMahasiswaView'
import MahasiswaEditView from 'views/MahasiswaView/MahasiswaEditView'
import DosenView from 'views/DosenView/DosenView'
import KelasView from 'views/KelasView/KelasView'
import MataKuliahView from 'views/MataKuliahView/MataKuliahView'
import RuanganView from 'views/RuanganView/RuanganView'
import injectTapEventPlugin from 'react-tap-event-plugin'
	// Check this repo:
	// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route component={MahasiswaView} path='/mahasiswa' />
    <Route component={AddMahasiswaView} path='/mahasiswa/add' />
    <Route component={MahasiswaEditView} path='/mahasiswa/:nim' />
    <Route component={DosenView} path='/dosen' />
    <Route component={KelasView} path='/kelas' />
    <Route component={MataKuliahView} path='/mata-kuliah' />
    <Route component={RuanganView} path='/ruangan' />
  </Route>
)
