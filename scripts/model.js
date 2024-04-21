import fs from 'fs';

// Read data and
const csv_filename = './HandmerQuasiCrystalVertex.csv';
const json_filename = './HandmerQuasiCrystalVertex.json';

const parsed_points = [];

fs.readFile(csv_filename, 'utf-8', (err, data) => {
    if (err) {
        console.log('Error:', err, '-', csv_filename)
        return;
    }
    const rows = data.split('\n');
    let titleRow = true;
    for (const row of rows) {
        if (titleRow) {
            titleRow = false;
            continue;
        }

        const line = row.split(',');
        const point1 = line.slice(0, 3).map(parseFloat);
        const point2 = line.slice(-3).map(parseFloat);

        // Another way I tried it
        // parsed_points.push(point1)
        // parsed_points.push(point2);

        parsed_points.push([point1, point2]);
    }

    fs.writeFile(json_filename, JSON.stringify({"data": parsed_points}), err => {
        if (err) {
            console.log('Error writing file', json_filename);
        }
    });
})
