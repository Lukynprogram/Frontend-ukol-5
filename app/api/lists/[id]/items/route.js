import { NextResponse } from 'next/server';
import { shoppingLists, itemIdCounters } from '../../../../mockData';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request, context) {
  await delay(500);
  const resolvedParams = await context.params;
  const { id } = resolvedParams;

  if (shoppingLists[id]) {
    return NextResponse.json(shoppingLists[id].items || []);
  } else {
    return NextResponse.json({ success: false, message: 'List not found' }, { status: 404 });
  }
}

export async function POST(request, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const list = shoppingLists[id];

    if (!list) {
      return NextResponse.json(
        { success: false, message: 'List not found' },
        { status: 404 }
      );
    }

    const newItem = await request.json();

    if (!newItem.name || newItem.name.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'Item name is required' },
        { status: 400 }
      );
    }

    const quantity = Number(newItem.quantity);
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return NextResponse.json(
        { success: false, message: 'Item quantity must be a positive integer' },
        { status: 400 }
      );
    }

    const itemId = ++itemIdCounters[id];
    const item = {
      id: itemId,
      name: newItem.name,
      resolved: false,
      quantity: quantity,
    };

    list.items.push(item);

    return NextResponse.json({
      success: true,
      message: 'Item successfully added',
      item,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to add item' },
      { status: 500 }
    );
  }
}

export async function PUT(request, context) {
  try {
    const resolvedParams = await context.params;
    const { id } = resolvedParams;
    const list = shoppingLists[id];

    if (!list) {
      return NextResponse.json(
        { success: false, message: 'List not found' },
        { status: 404 }
      );
    }

    const updatedItem = await request.json();

    if (!updatedItem.id) {
      return NextResponse.json(
        { success: false, message: 'Item ID is required' },
        { status: 400 }
      );
    }

    const item = list.items.find((i) => i.id === updatedItem.id);
    if (!item) {
      return NextResponse.json(
        { success: false, message: 'Item not found' },
        { status: 404 }
      );
    }

    if (
      updatedItem.name !== undefined &&
      (!updatedItem.name || updatedItem.name.trim() === '')
    ) {
      return NextResponse.json(
        { success: false, message: 'Item name cannot be empty' },
        { status: 400 }
      );
    }

    const quantity = Number(updatedItem.quantity);
    if (
      updatedItem.quantity !== undefined &&
      (!Number.isInteger(quantity) || quantity <= 0)
    ) {
      return NextResponse.json(
        { success: false, message: 'Item quantity must be a positive integer' },
        { status: 400 }
      );
    }

    if (updatedItem.name !== undefined) {
      item.name = updatedItem.name;
    }
    if (updatedItem.quantity !== undefined) {
      item.quantity = quantity;
    }
    if (updatedItem.resolved !== undefined) {
      item.resolved = updatedItem.resolved;
    }

    return NextResponse.json({
      success: true,
      message: 'Item successfully updated',
      item,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to update item' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, context) {
  await delay(500);
  const resolvedParams = await context.params;
  const { id } = resolvedParams;

  const { itemId } = await request.json();

  if (shoppingLists[id]) {
    const list = shoppingLists[id];
    const itemIndex = list.items.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const deletedItem = list.items.splice(itemIndex, 1);
      return NextResponse.json({
        success: true,
        message: 'Item successfully deleted',
        item: deletedItem[0],
      });
    } else {
      return NextResponse.json({ success: false, message: 'Item not found' }, { status: 404 });
    }
  } else {
    return NextResponse.json({ success: false, message: 'List not found' }, { status: 404 });
  }
}
