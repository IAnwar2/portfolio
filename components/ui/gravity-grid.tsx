import React, { useState, useEffect, useCallback } from 'react';

interface GravityGridProps {
  columns?: number;
  rows?: number;
  animationSpeed?: number;
  squareSize?: number;
}

interface ActiveCell {
  row: number;
  col: number;
  id: string;
}

const GravityGrid: React.FC<GravityGridProps> = ({
  columns = 39,
  rows = 7,
  animationSpeed = 300,
  squareSize = 30
}) => {
  const [activeCells, setActiveCells] = useState<ActiveCell[]>([]);
  const [actualColumns, setActualColumns] = useState(columns);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Calculate columns based on container width and square size
  useEffect(() => {
    const calculateColumns = () => {
      if (!containerRef) return;
      
      const containerWidth = containerRef.offsetWidth;
      // Calculate how many complete squares fit in the container
      const calculatedColumns = Math.floor(containerWidth / squareSize);
      setActualColumns(Math.max(1, calculatedColumns)); // Ensure at least 1 column
    };

    calculateColumns();
    
    const resizeObserver = new ResizeObserver(calculateColumns);
    if (containerRef) {
      resizeObserver.observe(containerRef);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [squareSize, containerRef]);

  const startGravityAnimation = useCallback((cell: ActiveCell) => {
    let currentRow = cell.row;
    
    const dropInterval = setInterval(() => {
      currentRow++;
      
      if (currentRow >= rows) {
        // Remove the cell when it goes off the grid
        setActiveCells(prev => prev.filter(c => c.id !== cell.id));
        clearInterval(dropInterval);
      } else {
        // Update the cell position
        setActiveCells(prev => 
          prev.map(c => 
            c.id === cell.id 
              ? { ...c, row: currentRow }
              : c
          )
        );
      }
    }, animationSpeed);
  }, [rows, animationSpeed]);

  const handleCellActivation = useCallback((row: number, col: number) => {
    // Don't create new drops if there's already an active cell in this column
    // const hasActiveInColumn = activeCells.some(cell => cell.col === col);
    const hasActiveInColumn = false;

    if (hasActiveInColumn) return;

    const newId = generateId();
    const newCell: ActiveCell = { row, col, id: newId };
    
    setActiveCells(prev => [...prev, newCell]);
    
    // Start the gravity animation immediately
    startGravityAnimation(newCell);
  }, [startGravityAnimation]);

  const handleCellHover = useCallback((row: number, col: number) => {
    handleCellActivation(row, col);
  }, [handleCellActivation]);

  const isCellActive = (row: number, col: number) => {
    return activeCells.some(cell => cell.row === row && cell.col === col);
  };

  const renderGrid = () => {
    const cells = [];
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < actualColumns; col++) {
        const isActive = isCellActive(row, col);
        
        cells.push(
          <div
            key={`${row}-${col}`}
            className={`
              border border-[#372F32] 
              transition-colors duration-75
              cursor-pointer hover:bg-[#584B50]
              ${isActive ? 'bg-[#584B50]' : 'bg-[#131110]'}
            `}
            style={{
              width: squareSize,
              height: squareSize,
              gridColumn: col + 1,
              gridRow: row + 1,
            }}
            onMouseEnter={() => handleCellHover(row, col)}
          />
        );
      }
    }
    
    return cells;
  };

  return (
    <div 
      ref={setContainerRef}
      className="hidden md:block w-full overflow-hidden pt-4"
      style={{ backgroundColor: '#131110' }}
    >
      <div 
        className="relative"
        style={{
          width: `${actualColumns * squareSize}px`,
          height: `${rows * squareSize}px`,
        }}
      >
        {/* Main grid */}
        <div 
          className="grid"
          style={{
            backgroundColor: '#131110',
            gridTemplateColumns: `repeat(${actualColumns}, ${squareSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
            width: `${actualColumns * squareSize}px`,
          }}
        >
          {renderGrid()}
        </div>
        
        {/* Fade overlay gradients */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Top fade */}
          <div 
            className="absolute top-0 left-0 right-0"
            style={{
              height: `${squareSize * 2}px`,
              background: `linear-gradient(to bottom, #131110 0%, transparent 100%)`
            }}
          />
          
          {/* Bottom fade */}
          <div 
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: `${squareSize * 2}px`,
              background: `linear-gradient(to top, #131110 0%, transparent 100%)`
            }}
          />
          
          {/* Left fade */}
          <div 
            className="absolute top-0 bottom-0 left-0"
            style={{
              width: `${squareSize * 2}px`,
              background: `linear-gradient(to right, #131110 0%, transparent 100%)`
            }}
          />
          
          {/* Right fade */}
          <div 
            className="absolute top-0 bottom-0 right-0"
            style={{
              width: `${squareSize * 2}px`,
              background: `linear-gradient(to left, #131110 0%, transparent 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GravityGrid;