import React, { useRef, useEffect, useState } from 'react';
import { Typography, Card, CardContent, Button, Box, TextField } from '@mui/material';
import './Physics.css';

const PhysicsExperiment = () => {
  const canvasRef = useRef(null);
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw battery simulation
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(150, 100);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.closePath();
    ctx.fillStyle = 'gray';
    ctx.fill();

    // Draw current
    if (current) {
      const currentX = 50 + 100 * (parseFloat(current) / 5); // 5 is the maximum current value (adjust as needed)
      ctx.beginPath();
      ctx.moveTo(currentX, 125);
      ctx.lineTo(currentX - 10, 125);
      ctx.lineTo(currentX - 10, 135);
      ctx.lineTo(currentX, 135);
      ctx.closePath();
      ctx.fillStyle = 'red';
      ctx.fill();
    }

    // Draw resistance symbol
    if (resistance) {
      const resistanceX = 80 + 40 * (parseFloat(resistance) / 10); // 10 is the maximum resistance value (adjust as needed)
      ctx.font = '16px Arial';
      ctx.fillText('R', resistanceX, 125);
    }
  }, [current, resistance]);

  const handleCalculate = () => {
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const r = v / i;
    setResistance(r.toFixed(2));
    setShowExplanation(true);
  };

  const handleReset = () => {
    setVoltage('');
    setCurrent('');
    setResistance('');
    setShowExplanation(false);
  };

  return (
    <Box className = "container" sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" className="title" gutterBottom>
        Thực hành Vật lý lớp 11
      </Typography>
      <Card className="card">
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{fontSize: '20px'}}>
            Xác định suất điện động và điện trở của một pin điện hóa
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hãy nhập giá trị điện áp (V) và dòng điện (A) để tính toán suất điện động và điện trở.
          </Typography>
          <TextField
            label="Điện áp (V)"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            fullWidth
            margin="normal"
            className="form-field"
          />
          <TextField
            label="Dòng điện (A)"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            fullWidth
            margin="normal"
            className="form-field"
          />
          <Box className="button-group" sx={{marginTop : '20px'}}>
            <Button variant="contained" color="primary" onClick={handleCalculate} className="calculate-button" sx={{marginRight : '20px'}}>
              Tính toán
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleReset} className="reset-button">
              Đặt lại
            </Button>
          </Box>
          {showExplanation && (
            <>
            <Box sx={{marginTop : '10px'}}>
              <Typography variant="body2" className="explanation-heading" gutterBottom>
                Giải thích:
              </Typography>
              <Typography variant="body2" className="explanation" gutterBottom>
                - Suất điện động (EMF) = Điện áp (V)
              </Typography>
              <Typography variant="body2" className="explanation" gutterBottom>
                - Điện trở (R) = Điện áp (V) / Dòng điện (A)
              </Typography>
            </Box>
            </>
          )}
          {resistance && (
            <Typography variant="body1" gutterBottom>
              Điện trở nội của pin: {resistance} Ω
            </Typography>
          )}
          <canvas ref={canvasRef} width={200} height={200} className="canvas" />
          {showExplanation && (
            <>
            <Box>
              <Typography variant="body2" className="explanation" gutterBottom>
                - Suất điện động là điện áp mà một nguồn điện cung cấp cho mạch điện.
              </Typography>
              <Typography variant="body2" className="explanation" gutterBottom>
                - Điện trở là khả năng ngăn cản dòng điện chảy qua mạch điện.
              </Typography>
            </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PhysicsExperiment;