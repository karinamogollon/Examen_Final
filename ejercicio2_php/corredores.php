<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $vueltas = (int)$_POST['vueltas'];
    $tiempoA = (float)$_POST['tiempoA'];
    $tiempoB = (float)$_POST['tiempoB'];
    if ($vueltas <= 0 || $tiempoA <= 0 || $tiempoB <= 0 || $tiempoA == $tiempoB) {
        echo "Por favor, ingresa valores válidos. Los tiempos deben ser positivos y diferentes.";
        exit;
    }
    $coincidencias = [];
    for ($i = 1; $i <= $vueltas; $i++) {
        $tiempoTotalA = $i * $tiempoA;
        for ($j = 1; $j <= $vueltas; $j++) {
            $tiempoTotalB = $j * $tiempoB;
            if ($tiempoTotalA == $tiempoTotalB) {
                $coincidencias[] = [
                    'vueltasA' => $i,
                    'vueltasB' => $j,
                    'tiempo' => $tiempoTotalA
                ];
            }
        }
    }
    echo "<h1>Resultados</h1>";
    if (count($coincidencias) > 0) {
        echo "<p>Los corredores coinciden en los siguientes puntos:</p>";
        echo "<ul>";
        foreach ($coincidencias as $c) {
            echo "<li>Vueltas A: {$c['vueltasA']}, Vueltas B: {$c['vueltasB']}, Tiempo: {$c['tiempo']} minutos</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No hubo coincidencias en el rango dado.</p>";
    }
}
?>