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
import AddDosenView from 'views/DosenView/AddDosenView'
import DosenEditView from 'views/DosenView/DosenEditView'
import KelasView from 'views/KelasView/KelasView'
import AddKelasView from 'views/KelasView/AddKelasView'
import KelasEditView from 'views/KelasView/KelasEditView'
import MataKuliahView from 'views/MataKuliahView/MataKuliahView'
import AddMataKuliahView from 'views/MataKuliahView/AddMataKuliahView'
import MataKuliahEditView from 'views/MataKuliahView/MataKuliahEditView'
import RuanganView from 'views/RuanganView/RuanganView'
import AddRuanganView from 'views/RuanganView/AddRuanganView'
import RuanganEditView from 'views/RuanganView/RuanganEditView'
import ProdiView from 'views/ProdiView/ProdiView'
import AddProdiView from 'views/ProdiView/AddProdiView'
import ProdiEditView from 'views/ProdiView/ProdiEditView'
import JurusanView from 'views/JurusanView/JurusanView'
import AddJurusanView from 'views/JurusanView/AddJurusanView'
import JurusanEditView from 'views/JurusanView/JurusanEditView'
import JabatanView from 'views/JabatanView/JabatanView'
import AddJabatanView from 'views/JabatanView/AddJabatanView'
import JabatanEditView from 'views/JabatanView/JabatanEditView'
import JadwalView from 'views/JadwalView/JadwalView'
import AddJadwalView from 'views/JadwalView/AddJadwalView'
import JadwalEditView from 'views/JadwalView/JadwalEditView'
import KehadiranView from 'views/KehadiranView/KehadiranView'
import injectTapEventPlugin from 'react-tap-event-plugin'
	// Check this repo:
	// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route component={MahasiswaView} path='/mahasiswa' />
    <Route component={AddMahasiswaView} path='/add/mahasiswa' />
    <Route component={MahasiswaEditView} path='/mahasiswa/:nim' />
    <Route component={DosenView} path='/dosen' />
    <Route component={AddDosenView} path='/add/dosen' />
    <Route component={DosenEditView} path='/dosen/:nip' />
    <Route component={KelasView} path='/kelas' />
    <Route component={AddKelasView} path='/add/kelas' />
    <Route component={KelasEditView} path='/kelas/:id' />
    <Route component={MataKuliahView} path='/mata-kuliah' />
    <Route component={AddMataKuliahView} path='/add/mata-kuliah' />
    <Route component={MataKuliahEditView} path='/mata-kuliah/:id' />
    <Route component={RuanganView} path='/ruangan' />
    <Route component={AddRuanganView} path='/add/ruangan' />
    <Route component={RuanganEditView} path='/ruangan/:id' />
    <Route component={ProdiView} path='/prodi' />
    <Route component={AddProdiView} path='/add/prodi' />
    <Route component={ProdiEditView} path='/prodi/:id' />
    <Route component={JurusanView} path='/jurusan' />
    <Route component={AddJurusanView} path='/add/jurusan' />
    <Route component={JurusanEditView} path='/jurusan/:id' />
    <Route component={JabatanView} path='/jabatan' />
    <Route component={AddJabatanView} path='/add/jabatan' />
    <Route component={JabatanEditView} path='/jabatan/:id' />
    <Route component={JadwalView} path='/jadwal' />
    <Route component={AddJadwalView} path='/add/jadwal' />
    <Route component={JadwalEditView} path='/jadwal/:id' />
    <Route component={KehadiranView} path='/kehadiran' />
  </Route>
)
