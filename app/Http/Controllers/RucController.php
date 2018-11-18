<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RucController extends Controller
{
    public function index()
    {
        return view('test/consultaruc');
    }
    public function consultar(Request $request)
    {
        if ($request->ajax()) {
            $ruc=$request->get('ruc');
            $ruta = "https://ruc.com.pe/api/beta/ruc";
            //$token = "760d3179-3ce3-46b5-bc8e-412f433de99a-944b1d19-26a1-40cc-950c-97d343d4b0b7";
            $token="f840b2a2-9df4-4036-9165-4532f0dda927-8bdc2666-d6a4-463f-849e-d55f7d47c81d";

            $rucaconsultar = $ruc;
            $data = array(
                "token" => $token,
                "ruc"   => $rucaconsultar
            );

            $data_json = json_encode($data);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $ruta);
            curl_setopt(
                $ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                )
            );
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS,$data_json);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $respuesta  = curl_exec($ch);
            curl_close($ch);

            $leer_respuesta = json_decode($respuesta, true);
            $data=array('entidad' => $leer_respuesta);
            echo json_encode($data);
        }
    }
}
