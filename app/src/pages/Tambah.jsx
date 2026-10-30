import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: '', id: '', kondisi: '', kodeAlat: '', jumlah: ''}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul Alat wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Aset</h1>

      <label htmlFor="judul">Judul / Nama Alat</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Pilih Kategori</option>
        <option>Perangkat Komputer</option>
        <option>Perangkat Jaringan</option>
        <option>Perangkat Pendukung</option>

      </select>

      <label htmlFor="id">ID Aset</label>
      <input id="id" name="id" type="number" value={form.id} onChange={ubah} />

      <label htmlFor="kondisi">Kondisi</label>
      <select id="kondisi" name="kondisi" value={form.kondisi} onChange={ubah}>
        <option value="PilihKondisi">Pilih Kondisi</option>
        <option value="SangatBaik">Sangat Baik</option>
        <option value="Baik">Baik</option>
        <option value="PerluPerbaikan">Perlu Perbaikan</option>
      </select>

      <label htmlFor="kodeAlat">Kode Alat</label>
      <input id="kodeAlat" name="kodeAlat" value={form.kodeAlat} onChange={ubah} />

      <label htmlFor="jumlah">Jumlah</label>
      <input id="jumlah" name="jumlah" type="number" value={form.jumlah} onChange={ubah} />

      <button type="submit">Simpan</button>
    </form>
  )
}