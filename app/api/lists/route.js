import { NextResponse } from 'next/server';
import { shoppingLists, incrementListIdCounter } from '../../mockData';

// Simulace delaye
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
    await delay(500);
    const lists = Object.values(shoppingLists).map(({ id, name, owner, members, archived }) => ({
      id,
      name,
      owner,
      members,
      archived,
    }));
  
    return NextResponse.json(lists);
  }

export async function POST(request) {
  try {
    const newList = await request.json();

    if (!newList.name || newList.name.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'List name is required' },
        { status: 400 }
      );
    }

    if (!newList.owner || newList.owner.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'List owner is required' },
        { status: 400 }
      );
    }

    const id = String(incrementListIdCounter());
    shoppingLists[id] = {
      id,
      name: newList.name,
      owner: newList.owner,
      members: newList.members || [],
      archived: false,
      items: [],
    };

    return NextResponse.json({
      success: true,
      message: 'List successfully added',
      list: shoppingLists[id],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to add list' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
    await delay(500);
    const updatedList = await request.json();
    const { id } = updatedList;
  
    if (shoppingLists[id]) {
      shoppingLists[id] = {
        ...shoppingLists[id],
        ...updatedList,
      };
  
      const { items, ...updatedDetails } = shoppingLists[id];
      return NextResponse.json({
        success: true,
        message: 'List successfully updated',
        list: updatedDetails,
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'List not found' },
        { status: 404 }
      );
    }
  }

export async function DELETE(request) {
  await delay(500);
  const { id } = await request.json();

  if (shoppingLists[id]) {
    delete shoppingLists[id];
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: 'List not found' }, { status: 404 });
  }
}
